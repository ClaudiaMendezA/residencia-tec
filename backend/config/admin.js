module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6101e520ce6ea2d2ede8d933840c2b6d'),
  },
});
