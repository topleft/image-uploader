(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //

    const routes = require('../routes');

    // *** register routes *** //

    app.use('/auth/', routes.auth);
    app.use('/api/', routes.notes);
    app.use('/api/', routes.image);
    app.use('/api/', routes.health);

  };

})(module.exports);
