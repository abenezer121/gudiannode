const router = require("express").Router();
const {
     addPapersController,
    returnAllPapersController,
    deletePapersController,
    updatePapersController
} = require("./../../../controller/paper");
const upload = require("./upload").upload;
//get paper
router.get("", async (req, res,next) => {
  returnAllPapersController()
    .then((result) => res.status(200).send(result))
    .catch((err) => next(err));
});

//post paper
router.post(
  "",
    upload.single("file"),
  async (req, res, next) => {
    let newPath = req.file.destination.replace('\\\\', '\\');
    newPath = newPath.replace(appRoot+'\\data', '');
    newPath = newPath + "\\" +  req.file.filename 
    addPapersController(req.body.title , newPath)
      .then((result) => res.status(200).send(result))
      .catch((err) => next(err));
  }
);


//update paper
router.patch(
  "",
  async (req, res,next) => {
    updatePapersController(req.body.id, req.body.title )
      .then((result) => res.status(200).send(result))
      .catch((err) => next(err));
  }
);


//delete paper
router.delete("/:id", async (req, res,next) => {
  deletePapersController(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((err) => next(err));
});

module.exports = router;

