const BASE = 'http://localhost:5000/api/images';

export const submitUrls = async (urls) => {
  await fetch(`${BASE}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ urls }),
  });
};

export const fetchStatus = async (url) => {
  const res = await fetch(`${BASE}/status?url=${encodeURIComponent(url)}`);
  return await res.json();
};

export const fetchResults = async (url) => {
  const res = await fetch(`${BASE}/results?url=${encodeURIComponent(url)}`);
  return await res.json();
};