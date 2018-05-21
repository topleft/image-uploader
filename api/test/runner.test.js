const authRoutes = require('./routes/auth/auth');
const basicDao = require('./helpers/basic-crud');
const authDao = require('./helpers/auth');

authRoutes();
authDao();
basicDao();
