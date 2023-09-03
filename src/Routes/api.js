const expres = require("express");
const router = expres.Router();
const blogController = require("../Controllers/blogController");
const blogDetailsController = require("../Controllers/blogDetailsController");
const commentController = require("../Controllers/commentController");
const messageController = require("../Controllers/messageController");
const portfolioController = require("../Controllers/portfolioController");
const productController = require("../Controllers/productController");
const projectController = require("../Controllers/projectController");
const profitController = require("../Controllers/profitController");
const titleController = require("../Controllers/titleController");
const serviceController = require("../Controllers/serviceController");

router.get("/blog", blogController.create);
router.get("/blog-read", blogController.read);
router.get("/blog-delete", blogController.delete);
router.get("/blog-update", blogController.update);

router.get("/blogDetails", blogDetailsController.create);
router.get("/blogDetails-read", blogDetailsController.read);
router.get("/blogDetails-delete", blogDetailsController.delete);
router.get("/blogDetails-update", blogDetailsController.update);

router.get("/comment", commentController.create);
router.get("/comment-read", commentController.read);
router.get("/comment-delete", commentController.delete);
router.get("/comment-update", commentController.update);

router.get("/message", messageController.create);
router.get("/message-read", messageController.read);
router.get("/message-delete", messageController.delete);
router.get("/message-update", messageController.update);

router.get("/portfolio", portfolioController.create);
router.get("/portfolio-read", portfolioController.read);
router.get("/portfolio-delete", portfolioController.delete);
router.get("/portfolio-update", portfolioController.update);

router.get("/product", productController.create);
router.get("/product-read", productController.read);
router.get("/product-delete", productController.delete);
router.get("/product-update", productController.update);

router.get("/profit", profitController.create);
router.get("/profit-read", profitController.read);
router.get("/profit-delete", profitController.delete);
router.get("/profit-update", profitController.update);

router.get("/project", projectController.create);
router.get("/project-read", projectController.read);
router.get("/project-delete", projectController.delete);
router.get("/project-update", projectController.update);

router.get("/title", titleController.create);
router.get("/title-read", titleController.read);
router.get("/title-delete", titleController.delete);
router.get("/title-update", titleController.update);

router.get("/service", serviceController.create);
router.get("/service-read", serviceController.read);
router.get("/service-delete", serviceController.delete);
router.get("/service-update", serviceController.update);

module.exports = router;
