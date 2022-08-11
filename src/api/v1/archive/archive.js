const router = require("express").Router();
const {
     addArchiveController,
    returnAllArchiveController,
    deleteArchiveController,
    updateArchiveController
} = require("./../../../controller/archive");
const upload = require("./upload").upload;

//get paper
router.get("", async (req, res,next) => {
  returnAllArchiveController()
    .then((result) => res.status(200).send(result))
    .catch((err) => next(err));
});

//post paper
router.post(
  "",
  upload.single("file"),
  async (req, res, next) => {
   console.log(req.file)
    let newPath = req.file.destination.replace('\\\\', '\\');
    newPath = newPath.replace(appRoot+'\\data', '');
    newPath = newPath + "\\" + req.file.filename 
    console.log(newPath)
    console.log(appRoot)

    addArchiveController(req.body.title , newPath , req.body.category)
      .then((result) => res.status(200).send(result))
      .catch((err) => next(err));
  }
);


//update paper
router.patch(
  "",
  async (req, res,next) => {
    updateArchiveController(req.body.id, req.body.title )
      .then((result) => res.status(200).send(result))
      .catch((err) => next(err));
  }
);


//delete paper
router.delete("/:id", async (req, res,next) => {
  deleteArchiveController(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((err) => next(err));
});

module.exports = router;

