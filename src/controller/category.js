const {
    addCategory,
    returnAllCategory,
    deleteCategory,
    updateCategoy
} = require("./../db/category");

const addCategoryController = async (name) =>
  await addCategory(name);

const returnAllCategoryController = async () => await returnAllCategory();

const deleteCategoryController = async (id) => await deleteCategory(id);

const updateCategoyController = async (id, name) => await updateCategoy (id, name);

module.exports = {
    addCategoryController,
    returnAllCategoryController,
    deleteCategoryController,
    updateCategoyController
};
