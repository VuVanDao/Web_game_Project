import express from "express";
let router = express.Router();
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayCRUD);
  router.get("/update-crud/:id", homeController.updateCRUD);
  router.post("/put-crud", homeController.getUpdateUser);
  router.get("/delete-crud", homeController.deleteCRUD);
  router.post("/delete-crud-2", homeController.deleteUser);
  router.get("/yugioh", homeController.getInformation);

  router.post("/api/login", userController.handleLogin);
  return app.use("/", router);
};
module.exports = initWebRoutes;
