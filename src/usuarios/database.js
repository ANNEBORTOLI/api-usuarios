const bd = require('../database/models');

class Database {

  findAll() {
    const result = bd.Usuario.findAll();
    return result
  }

  findByPk(id) {
    const result = bd.Usuario.findByPk(id);
    return result;
  }

  async edit(id, nome, email, telefone, senha, status) {
    const result = await bd.Usuario.update({
      nome: nome,
      email: email,
      telefone: telefone,
      senha: senha,
      status: status
    }, {
      where: { id: id }
    });
    return result;
  }

  async create(nome, email, telefone, senha, status) {
    const result = await bd.Usuario.create({
      nome: nome,
      email: telefone,
      telefone: telefone,
      senha: senha,
      status: status
    })
    return result
  }

  async remove(id) {
    const result = await bd.Usuario.destroy({
      where: { id: Number(id) }
    });
    return result
  }
}

const UsuariosDatabase = new Database();

module.exports = UsuariosDatabase;