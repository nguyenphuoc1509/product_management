const dashboardRoutes = require("./dashboard.route");
const systemConfig = require("../../config/system");

module.exports = (app) => {
    const PATH_ADMIN = `/${systemConfig.prefixAAdmin}`;

    app.use(`${PATH_ADMIN}/dashboard`, dashboardRoutes);
    
}