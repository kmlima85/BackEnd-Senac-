import mongoose from "mongoose";

mongoose.connect("mongodb+srv://senac:12345@projetofinal.36hjx.mongodb.net/Projetofinal"); // A maquina so vai ter acesso ao bd se colocarmos o op - mongodb- network access
// depois de pegar o link substituir alguns dados dos itens : colocar password do bd cadastrado e depois substituir tudo depois do .net/ pelo nome do db cadastrado.

let db = mongoose.connection;

export default db;