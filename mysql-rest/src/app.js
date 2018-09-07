const express = require('express');
const app = express();
const cors = require('cors');

const morgan = require('morgan');
const bodyParser = require('body-parser');

// settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));   

//routes
require('./routes/userRoutes')(app);
require('./routes/nueProductRoutes')(app);
require('./routes/emisorRoutes')(app);
require('./routes/empleadoRoutes')(app);
require('./routes/totalesRoutes')(app);
require('./routes/filEmpRoutes')(app);

//static files

app.listen(app.get('port'), () => {
  console.log('Server on port 3000');
});
