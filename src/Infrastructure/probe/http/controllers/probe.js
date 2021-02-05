module.exports = () => ({
  index: async (req, res) => {
    let postgresConnection = 'NOT';
    await req
      .app
      .database
      .sequelize
      .authenticate()
      .then(() => {
        postgresConnection = 'OK';
      })
      .catch(() => {
        postgresConnection = 'ERROR';
      });
    res
      .status(200)
      .json({
        message: 'Probe',
        postgres_connection: postgresConnection,
      });
  }
});
