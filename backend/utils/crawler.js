const axios = require('axios');
const cheerio = require('cheerio');
const Image = require('../models/Image');

exports.processPage = async (url) => {
  try {
    const resp = await axios.get(url);
    const $ = cheerio.load(resp.data);
    const images = $('img').map((_, el) => $(el).attr('src')).get();

    for (const src of images) {
      try {
        const imageUrl = new URL(src, url).href;
        const imgResp = await axios.get(imageUrl, { responseType: 'arraybuffer' });

        await Image.create({
          sourceUrl: url,
          imageUrl,
          size: imgResp.data.length,
          mimeType: imgResp.headers['content-type'],
          status: 'processed'
        });
      } catch {}
    }
  } catch (e) {
    await Image.create({ sourceUrl: url, status: 'failed' });
  }
};