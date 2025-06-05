const db = require("./database");

const sql = `INSERT INTO usuarios (id, nome, email, cpf, role, senha) VALUES (?, ?, ?, ?, ?, ?)`;

db.run(sql, ["abc123", "Ada", "ada@exemplo.com", "12345678900", "student", "senhaHash"], function(err) {
  if (err) {
    return console.error("Erro ao inserir:", err.message);
  }
  console.log("Usuário inserido com sucesso. ID:", this.lastID);
});
