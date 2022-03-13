module.exports = ({ env }) => ({
  host: env('MY_HEROKU_URL'),
});