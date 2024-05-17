const express = require('express');
const pageRouters = require("./routes/index.route");
const path = require('path')
const app = require('./config/express.js');
const routes = require('./routes/api.route')

// Router
app.use('/api', routes);
app.use('', pageRouters);

app.listen(app.get('port'), app.get('host'), () => {
    console.log(`Server is running at http://${app.get('host')}:${app.get('port')}`);
});