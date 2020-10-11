module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 4242),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2985fe986c866d408f42bd9c7635826b'),
    },
  },
});
