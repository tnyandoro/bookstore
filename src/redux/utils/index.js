const bookStoreUrl = (() => {
  const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
  const appID = '8BeC6hhtibzqOPHKrDmH';
  const url = `${BASE_URL}/${appID}/books`;

  return url;
})();

export default bookStoreUrl;
