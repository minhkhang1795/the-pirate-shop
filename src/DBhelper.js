/**
 * This helper file was obtained from Udacity/reactnd-contacts-complete
 * https://github.com/minhkhang1795/reactnd-contacts-complete
 */
const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3000';

let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

export const getAll = () =>
  fetch(`${api}/videos.json`, { headers })
    .then(res => res.json())
    .then(data => data.videos)

export const remove = (video) =>
  fetch(`${api}/videos/${video.id}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data.video)

export const create = (body) =>
  fetch(`${api}/videos`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())