const router = require("express").Router();
const {
     addAdminController,
    loginController,
    deleteAdminController,
    updatePasswordController
} = require("./../../../controller/admin");


//get paper
router.post("", async (req, res,next) => {
  addAdminController(req.body.username , req.body.password)
    .then((result) => res.status(200).send(result))
    .catch((err) => next(err));
});

//get paper
router.post("/login", async (req, res,next) => {
  loginController(req.body.username , req.body.password)
    .then((result) => {
      if (result.password == req.body.password) {
        res.status(200).send("welcome")
      }
      else {
        res.status(400).send({ "message" : "wrong password"})
      }
    })
    .catch((err) => next(err));
});




//update paper
router.patch(
  "/:password/:id",
  async (req, res, next) => {
    
    updatePasswordController( req.params.id , req.params.password)
      .then((result) => res.status(200).send(result))
      .catch((err) => next(err));
  }
);


//delete paper
router.delete("/:id", async (req, res,next) => {
  deleteAdminController(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((err) => next(err));
});



module.exports = router;

