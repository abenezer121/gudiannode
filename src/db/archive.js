const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  addArchive: async (title , fileLocation) => {
    const archive = await prisma.Archive.findFirst({
      where: {
        title,
      },
    });
    if (archive) throw new Error("Archive already in database");
    const createArchive = await prisma.Archive.create({
      data: {
        title,
        fileLocation
      },
    });
    return createArchive;
  },

  returnAllArchive: async () => await prisma.Archive.findMany(),

 

  deleteArchive: async (id) => {
    const _deleteArchive = await prisma.Archive.delete({
      where: {
        id,
      },
    });
    return _deleteArchive;
  },

  updateArchive: async (id, title) => {
    const _updateArchive = await prisma.Archive.update({
      where: {
        id,
      },
      data: {
        title,
      },
    });
    return _updateArchive;
  },
};
