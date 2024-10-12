const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapasync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js")
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js")


//Reviews
//POST Route
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));
 //Delet Review route
 router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.deleteReview));

 module.exports = router;