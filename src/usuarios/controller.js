const UsuariosService = require('./service');

class Controller {

  async list(req, res) {
    const listaUsuarios = await UsuariosService.findAllUsers();

    return listaUsuarios.length == 0 ? res.json({ "status": "Nenhum usuário cadastrado" }) : res.json(listaUsuarios);
  }

  async listById(req, res) {
    const { id } = req.params;
    const usuario = await UsuariosService.findUser(id);

    return usuario ? res.json(usuario) : res.json({ "status": "User Not found" });
  }

  async createOrEdit(req, res) {
    const { id } = req.params;
    const { nome, email, telefone, senha, status } = req.body;

    await UsuariosService.saveUser({ id: id, nome, email, telefone, senha, status });

    res.status(201).json({ success: true })
  }

  async remove(req, res) {
    const { id } = req.params;
    await UsuariosService.removeUser(id);

    res.json({ success: true });
  }
}

const UsuariosController = new Controller();

module.exports = UsuariosController;