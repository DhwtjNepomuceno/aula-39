const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "meubanco.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    return console.error("Erro ao conectar com o banco:", err.message);
  }
  console.log("Conectado ao banco SQLite com sucesso!");
});

module.exports = db;
