const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  addCategory: async (name) => {
    const category = await prisma.Category.findFirst({
      where: {
        name,
      },
    });
    if (category) throw new Error("Category already in database");
    const createCategory = await prisma.Category.create({
      data: {
        name,
      },
    });
    return createCategory;
  },

  returnAllCategory: async () => await prisma.Category.findMany(),

 

  deleteCategory: async (id) => {
    const _deleteCategory = await prisma.Category.delete({
      where: {
        id,
      },
    });
    return _deleteCategory;
  },

  updateCategoy: async (id, name) => {
    const _updateCategory = await prisma.Category.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    return _updateCategory;
  },
};
