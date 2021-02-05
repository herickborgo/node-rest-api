module.exports = app => {
  const controller = app.Infrastructure.probe.http.controllers.probe;

  app.route('/probe')
    .get(controller.index);
}
