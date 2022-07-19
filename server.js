/*//importando modulo HTTP
const http = require('http');

const port = 3000;

const rotas = {
    '/': 'API Livros',
    '/livros': 'Página principal livros',
    '/cadlivros': 'Cadastro de livros',
        
}

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'}); //texto cabeçalho tipo comum
   /* res.end('API Livros');*/ // resposta que vai ser escrita na http
    /*res.end(rotas[req.url]);// resposta na http que vai puxar o caminho para as rotas após a barra do ex:localhost:3000/livros ou /cadlivros
});

server.listen(port, () =>{ //comando que chama a porta e cria uma msg quando o servidor rodar
    console.log(`Servidor está rodando no endereço http://localhost:${port}`)
});*/

// por boa pratica no server só fica o essencial e se importa dos outros arquivos
// o express ja usa o modulo http, então não precisa importar.
import app from './src/app.js';

const port = process.env.PORT || 3000; // verificando se foi uma porta padrão- monitora e recebe se não for recebe o valor padrão 3000.


app.listen(port, () => {
    console.log(`Servidor está rodando http://localhost: ${port}`)
});

