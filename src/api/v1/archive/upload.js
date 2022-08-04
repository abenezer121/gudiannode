const path = require("path");
const multer = require("multer");
const fs = require("fs");


const pdfFilter = (req, file, cb) => {
  let fileType = file.mimetype.split("/")[1];
  if (fileType === "pdf") {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file format"), false);
  }
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  
    if (
      !fs.existsSync(
        path.join(appRoot,  "data", "archive")
      )
    ) {
      fs.mkdirSync(path.join(appRoot,  "data", "archive"));
      fs.mkdirSync(
        path.join(appRoot, "data", "archive")
      );
    }
    cb(
      null,
      path.join(appRoot, "data", "archive")
    );
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    let ext =
      file.originalname.split(".")[file.originalname.split(".").length - 1];
    cb(null, `${uniqueSuffix}.${ext}`);
  },
});
exports.upload = multer({
  storage: storage,
  fileFilter: pdfFilter,
});
