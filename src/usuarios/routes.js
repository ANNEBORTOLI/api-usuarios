const express = require('express');
const router = express.Router();
const UsuariosController = require('./controller')

/* GET users listing. */
router.get('/', UsuariosController.list);
router.get('/:id', UsuariosController.listById);
/* POST create user. */
router.post('/', UsuariosController.create);
/* PUT update user.*/
router.put('/:id', UsuariosController.edit);
/* DELETE user. */
router.delete('/:id', UsuariosController.remove);

module.exports = router;
