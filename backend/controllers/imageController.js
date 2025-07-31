const Image = require('../models/Image');
const { processPage } = require('../utils/crawler');

exports.submitUrls = async (req, res) => {
  const { urls } = req.body;
  for (const url of urls) {
    await processPage(url);
  }
  res.json({ message: 'Processing started' });
};

exports.getStatus = async (req, res) => {
  const { url } = req.query;
  const images = await Image.find({ sourceUrl: url });
  res.json({ status: images.length ? images[0].status : 'unknown' });
};

exports.getResults = async (req, res) => {
  const { url } = req.query;
  const images = await Image.find({ sourceUrl: url });
  res.json(images);
};
