const ProjectsRouter = require("express").Router();

ProjectsRouter.get("/", (req, res) => {
    res.render("projects", { title: "Projects" });
});

ProjectsRouter.get("/netflix", (req, res) => {
    res.render("netflix", { title: "Netflix Redesign" });
});

ProjectsRouter.get("/blog", (req, res) => {
    res.render("blog", { title: "Blog" });
});

ProjectsRouter.get("/movie-search", (req, res) => {
    res.render("movie-search", { title: "Movie Search" });
});

ProjectsRouter.get("/e-commerce", (req, res) => {
    res.render("e-commerce", { title: "E-Commerce" });
});

module.exports = ProjectsRouter;