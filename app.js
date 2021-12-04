//Required External Modules
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const routes = require('./routes/index.js');
//App Variables
const app = express();
const port = process.env.PORT || 8000;
//App Configuration
app.set("views", path.join(__dirname, "views/pages"));
app.set("view engine", "ejs");
//App Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "img", "favicon-2.ico")));
//Route Definitions
require("./routes/index")(app);
// 404
app.get('*', function(req, res) {
    res.status(404).render("404", { title: "404" });
});
//Server Activation
app.listen(port, () => {
    console.log(`Listening on https:/localhost:${port}`);
});