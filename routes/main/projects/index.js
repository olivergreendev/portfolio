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
ProjectsRouter.get("/quocosolar", (req, res) => {
    res.render("quocosolar", { title: "Quocosolar" });
});
ProjectsRouter.get("/shoppy", (req, res) => {
    res.render("shoppy", { title: "Shoppy" });
});
ProjectsRouter.get("/yu-gi-oh", (req, res) => {
    res.render("yu-gi-oh", { title: "Yu-Gi-Oh! Card Search" });
});

module.exports = ProjectsRouter;