const { Usuario } = require("../models/Usuario");
const { db } = require("../../prisma/main");

class RepositorioDeUsuario {
  async buscarTodos() { //
    return await db.user.findMany()
  }

  async criar(usuario) { //post
    return await db.user.update({
      data: {
        name: usuario.name
      }
    })
  }

  async buscarPeloEmail(email) { //get
    return await db.user.findUnique({
      where: { email: email }
    })
  }

  async buscarPeloId(id) { //get
    return await db.user.findUnique({
      where: { id: id }
    })
  }

  async atualizar(usuarioId, dadosAtualizados) { //put
    return await db.user.update({
      where: {
        id: usuarioId
      },
      data: {
        name: dadosAtualizados.name
      }
    })
  }

  async deletarUmUsuario(id) { //delete
    return await db.user.delete({
      where: {id: id}
    });
  }
}

module.exports = new RepositorioDeUsuario();
