const { findAll, findByPk, edit, create, remove } = require('./database');

class Service {

  findAllUsers() {
    return findAll();
  }

  findUser(id) {
    return findByPk(id);
  }

  saveUser(usuario) {
    const { id, nome, email, telefone, senha, status } = usuario;

    return id ? edit(id, nome, email, telefone, senha, status) : create(nome, email, telefone, senha, status);
  }

  removeUser(id) {
    return remove(id);
  }
}


const UsuariosService = new Service();

module.exports = UsuariosService;