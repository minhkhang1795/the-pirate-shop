/**
 * This helper file was obtained from Udacity/reactnd-contacts-complete
 * https://github.com/minhkhang1795/reactnd-contacts-complete
 */
const api = process.env.PUBLIC_URL || '.';

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
    .then(data => data.videos);