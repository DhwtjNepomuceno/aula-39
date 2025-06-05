const db = require("./database");

const sql = `
  CREATE TABLE IF NOT EXISTS usuarios (
    id TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    cpf TEXT UNIQUE NOT NULL,
    role TEXT DEFAULT "student",
    senha TEXT NOT NULL
  )
`;

db.run(sql, (err) => {
  if (err) {
    console.error("Erro ao criar tabela:", err.message);
  } else {
    console.log("Tabela 'usuarios' criada com sucesso.");
  }
});
