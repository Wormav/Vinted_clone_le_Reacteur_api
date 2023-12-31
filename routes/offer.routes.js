const { Router } = require("express");
const fileUpload = require("express-fileupload");
const isAuthenticated = require("../middleware/isAuthenticated.middleware");
const {
  publishOffer,
  updateOffer,
  deleteOffer,
  getOffers,
  getOfferDetails,
} = require("../controllers/offer.controllers");

const offerRouter = Router();

offerRouter.post("/publish", isAuthenticated, fileUpload(), publishOffer);

offerRouter.put("/update/:id", isAuthenticated, fileUpload(), updateOffer);

offerRouter.delete("/remove/:id", isAuthenticated, fileUpload(), deleteOffer);

offerRouter.get("/", getOffers);

offerRouter.get("/:id", getOfferDetails);

module.exports = offerRouter;
