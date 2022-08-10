const router = require("express").Router();
const {
   addCategoryController,
    returnAllCategoryController,
    deleteCategoryController,
    updateCategoyController
} = require("./../../../controller/category");

//get paper
router.get("", async (req, res,next) => {
  returnAllCategoryController()
    .then((result) => res.status(200).send(result))
    .catch((err) => next(err));
});

//post paper
router.post(
  "",
  async (req, res,next) => {
    addCategoryController(req.body.name)
      .then((result) => res.status(200).send(result))
      .catch((err) => next(err));
  }
);


//update paper
router.patch(
  "",
  async (req, res,next) => {
    updateCategoyController(req.body.id, req.body.name)
      .then((result) => res.status(200).send(result))
      .catch((err) => next(err));
  }
);


//delete paper
router.delete("/:id", async (req, res, next) => {
 
  deleteCategoryController(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((err) => next(err));
});

module.exports = router;

