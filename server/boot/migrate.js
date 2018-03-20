module.exports = function (app) {
  app.dataSources.postgres.autoupdate();
  console.log("Performed automigration.");
}