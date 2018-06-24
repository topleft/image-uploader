const authRoutes = require('./routes/auth/auth');
const basicHelpers = require('./helpers/basic-crud');
const authHelpers = require('./helpers/auth');
const s3Helpers = require('./helpers/s3');


console.log('running rom the test runner');
authRoutes();
authHelpers();
basicHelpers();
s3Helpers();
