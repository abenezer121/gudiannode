const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  addPapers: async (title , fileLocation) => {
    const archive = await prisma.Papers.findFirst({
      where: {
        title,
      },
    });
    if (archive) throw new Error("Papers already in database");
    const createPapers= await prisma.Papers.create({
      data: {
        title,
        fileLocation
      },
    });
    return createPapers;
  },

  returnAllPapers: async () => await prisma.Papers.findMany(),

 

  deletePapers: async (id) => {
    const _deletePapers= await prisma.Papers.delete({
      where: {
        id,
      },
    });
    return _deletePapers;
  },

  updatePapers: async (id, title) => {
    const _updatePapers= await prisma.Papers.update({
      where: {
        id,
      },
      data: {
        title,
      },
    });
    return _updatePapers;
  },
};
