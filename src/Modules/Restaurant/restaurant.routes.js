import { Router } from "express";
import { auth } from "../../Middlewares/authentication.middleware.js";
import { multerHost } from "../../Middlewares/multer.middleware.js";
import { extensions } from "../../Utils/file-extensions.utils.js";
import * as controllers from "./restaurant.controllers.js";
import { errorHandler } from "../../Middlewares/error-handling.middleware.js";

const restaurantRouter = Router();

restaurantRouter.post(
  "/create",
  auth(),
  multerHost({ allowedExtensions: extensions.Images }).fields([
    { name: "profileImage", maxCount: 1 },
    { name: "layoutImage", maxCount: 1 },
    { name: "galleryImages", maxCount: 10 },
  ]),
  errorHandler(controllers.createRestaurant)
);
restaurantRouter.put(
  "/update/:id",
  auth(),
  multerHost({ allowedExtensions: extensions.Images }).fields([
    { name: "profileImage", maxCount: 1 },
    { name: "layoutImage", maxCount: 1 },
    { name: "galleryImages", maxCount: 10 },
  ]),
  errorHandler(controllers.updateRestaurant)
);

restaurantRouter.delete("/delete/:id", auth(), errorHandler(controllers.deleteRestaurant));

restaurantRouter.get("/:id", errorHandler(controllers.getRestaurantById));

restaurantRouter.get("/", errorHandler(controllers.getAllRestaurants));

export { restaurantRouter };
