const router = require("express").Router();
const {
     addBlogController,
    returnAllBlogController,
    deleteBlogController,
    updateBlogController
} = require("./../../../controller/blog");

//get paper
router.get("", async (req, res,next) => {
  returnAllBlogController()
    .then((result) => res.status(200).send(result))
    .catch((err) => next(err));
});


  
router.post(
  "",
  async (req, res, next) => {

    
    addBlogController(req.body.title , req.body.content , req.body.video , req.body.link)
      .then((result) => res.status(200).send(result))
      .catch((err) => next(err));
  }
);


//update paper
router.patch(
  "",
  async (req, res,next) => {
    updateBlogController(req.body.id, req.body.title , req.body.content )
      .then((result) => res.status(200).send(result))
      .catch((err) => next(err));
  }
);


//delete paper
router.delete("/:id", async (req, res,next) => {
  deleteBlogController(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((err) => next(err));
});

module.exports = router;

