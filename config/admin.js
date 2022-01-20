module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5a5354ebbff92ef4372a94d0e0d70dc5'),
  },
});
