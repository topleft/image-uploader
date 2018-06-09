require('dotenv').config({path: '/usr/src/app/.env'});
const authRoutes = require('./routes/auth/auth');
const basicHelpers = require('./helpers/basic-crud');
const authHelpers = require('./helpers/auth');
const s3Helpers = require('./helpers/s3');

authRoutes();
authHelpers();
basicHelpers();
s3Helpers();
