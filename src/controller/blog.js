const {

    addBlog,
    returnAllBlog,
    deleteBlog,
    updateBlog
} = require("./../db/blog");


const addBlogController = async (title , content , video , link) =>
  await addBlog(title , content , video , link);

const returnAllBlogController = async () => await returnAllBlog();

const deleteBlogController = async (id) => await deleteBlog(id);

const updateBlogController = async (id, title , content) => await updateBlog (id, title , content);

module.exports = {
    addBlogController,
    returnAllBlogController,
    deleteBlogController,
    updateBlogController
};
