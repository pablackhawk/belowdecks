const path = require('path');

module.exports = app => {
  // Home
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  // About
  app.get('/about', (req, res) => {
    res.sendfile(path.join(__dirname, '../public/about.html'));
  });
  // Episodes
  app.get('/episodes', (req, res) => {
    res.sendfile(path.join(__dirname, '../public/episodes.html'));
  });
  // People
  app.get('/people', (req, res) => {
    res.sendfile(path.join(__dirname, '../public/people.html.html'));
  });
  // Supplemental Reading
  app.get('/supplementalreading', (req, res) => {
    res.sendfile(path.join(__dirname, '../public/supplementalreading.html'));
  });
  // Contac
  app.get('/contac', (req, res) => {
    res.sendfile(path.join(__dirname, '../public/contact.html'));
  });
};
