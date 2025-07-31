import React, { useState } from 'react';
// import { submitUrls, getStatus, getImages } from '../services/api';
import { submitUrls, fetchStatus, fetchResults } from '../services/api';


const SubmitForm = () => {
  const [urls, setUrls] = useState('');
  const [status, setStatus] = useState('');
  const [images, setImages] = useState([]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urlList = urls.split('\n').map(u => u.trim()).filter(Boolean);
    await submitUrls(urlList);
    alert('Submitted URLs for processing');
  };

  const handleStatus = async () => {
    const url = urls.split('\n')[0]?.trim();
    if (!url) return;
    const result = await fetchStatus(url);
    setStatus(result.status);
  };

  const handleResults = async () => {
    const url = urls.split('\n')[0]?.trim();
    if (!url) return;
    const result = await fetchResults(url);
    setImages(result.images);
  };

  return (
    <div>
      <textarea
        rows={6}
        cols={60}
        placeholder="Enter one URL per line"
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleStatus}>Check Status</button>
      <button onClick={handleResults}>View Results</button>
      {status && <p>Status: {status}</p>}
      <ul>
      {(images || []).map((img, i) => (
  <img key={i} src={img.url} alt={`img-${i}`} />
))}

      </ul>
    </div>
  );
};

export default SubmitForm;
