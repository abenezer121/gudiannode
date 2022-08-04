const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  addBlog: async (title , content , photoLocation) => {
    const _blog = await prisma.Blog.findFirst({
      where: {
            title,
          
      },
    });
    if (_blog) throw new Error("Blog already in database");
    const createBlog= await prisma.Blog.create({
        data: {
            title,
            content,
            photoLocation
      },
    });
    return createBlog;
  },

  returnAllBlog: async () => await prisma.Blog.findMany(),

 

  deleteBlog: async (id) => {
    const _deletePapers= await prisma.Blog.delete({
      where: {
        id,
      },
    });
    return _deletePapers;
  },

  updateBlog: async (id, title , content) => {
    const _updatePapers= await prisma.Blog.update({
      where: {
        id,
      },
      data: {
          title,
          content
      },
    });
    return _updatePapers;
  },
};
