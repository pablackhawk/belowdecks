// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Express app
const app = express();
const PORT = process.env.PORT || 7465;

// Models
const db = require('./models');

// Routes
require('./routes/html.js')(app);
// require('./routes/api.js')(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Syncs Sequelize server
db.sequelize.sync({ force: false }).then(() => {
        app.listen(PORT, () => {
                console.log(`App listening on PORT: ${PORT}`);
        });
});

exports = module.exports = app;
