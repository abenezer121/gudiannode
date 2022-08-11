const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  addAdmin: async (username, password) => {

    const admin = await prisma.admin.findFirst({
      where: {
        username,
      },
    });
    if (admin) throw new Error("Archive already in database");
    const createAdmin = await prisma.admin.create({
      data: {
        username,
        password,
      
      },
    });
    return createAdmin;
  },

    login: async (username) => {
        const admin = await prisma.admin.findFirst({
            where: {
                username,
            },
        });
        return admin
      
    },

 

  deleteAdmin: async (id) => {
    const _deleteAdmin = await prisma.admin.delete({
      where: {
        id,
      },
    });
    return _deleteAdmin;
  },

  updatePassword: async (id , password) => {
    const _updatePassword = await prisma.admin.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });
    return _updatePassword;
  },
};
