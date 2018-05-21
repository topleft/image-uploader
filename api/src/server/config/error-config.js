(function (errorConfig) {

  'use strict';

  // *** error handling *** //

  errorConfig.init = function (app) {

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
      const err = new Error('Not Found');
      err.status = 404;
      next(err);
    });

    app.use(function(err, req, res, next) {
      app.get('env') !== 'test' && console.log(err);
      res.status(err.status || 500).send({
        message: err.message,
        name: err.name,
      });
    });

  };

})(module.exports);
