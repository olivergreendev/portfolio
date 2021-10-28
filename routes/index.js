const express = require("express");
var indexRouter = require("./main/index");
var projectsRouter = require("./main/projects/index");

module.exports = function(app) {
    app.use(express.json());
    app.use("/", indexRouter);
    app.use("/projects", projectsRouter);
};