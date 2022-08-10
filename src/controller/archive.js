const {
    addArchive,
    returnAllArchive,
    deleteArchive,
    updateArchive
} = require("./../db/archive");

const addArchiveController = async (title , fileLocation , category) =>
  await addArchive(title , fileLocation , category);

const returnAllArchiveController = async () => await returnAllArchive();

const deleteArchiveController = async (id) => await deleteArchive(id);

const updateArchiveController = async (id, title) => await updateArchive (id, title);

module.exports = {
    addArchiveController,
    returnAllArchiveController,
    deleteArchiveController,
    updateArchiveController
};
