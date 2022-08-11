const {
    addAdmin,
    login,
    deleteAdmin,
    updatePassword
} = require("./../db/admin");

const addAdminController = async (username, password) => await addAdmin(username, password);
const loginController = async (username) => await login(username);

const deleteAdminController = async (id) => await deleteAdmin(id);

const updatePasswordController = async (id , password) => await updatePassword (id , password);

module.exports = {
    addAdminController,
    loginController,
    deleteAdminController,
    updatePasswordController
};
