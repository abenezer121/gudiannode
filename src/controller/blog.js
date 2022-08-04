const {

    addBlog,
    returnAllBlog,
    deleteBlog,
    updateBlog
} = require("./../db/blog");

const addBlogController = async (title , content , photoLocatione) =>
  await addBlog(title , content , photoLocatione);

const returnAllBlogController = async () => await returnAllBlog();

const deleteBlogController = async (id) => await deleteBlog(id);

const updateBlogController = async (id, title , content) => await updateBlog (id, title , content);

module.exports = {
    addBlogController,
    returnAllBlogController,
    deleteBlogController,
    updateBlogController
};
