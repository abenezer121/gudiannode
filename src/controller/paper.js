const {
    addPapers,
    returnAllPapers,
    deletePapers,
    updatePapers
} = require("./../db/paper");

const addPapersController = async (title , fileLocation) =>
  await addPapers(title , fileLocation);

const returnAllPapersController = async () => await returnAllPapers();

const deletePapersController = async (id) => await deletePapers(id);

const updatePapersController = async (id, title) => await updatePapers (id, title);

module.exports = {
    addPapersController,
    returnAllPapersController,
    deletePapersController,
    updatePapersController
};
