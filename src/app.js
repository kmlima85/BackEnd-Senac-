import express from 'express';//onde define as rotas
import db from './config/dbConnect.js' // não esquecer de por a extensão do arquivo
import livros from './models/Livro.js';

db.on("error", console.log.bind(console, "Erro na conexão!"));//testar se vai ter algum erro e mostrar o erro capturado
db.once("open", () => { //open para se conectar se não tiver erro e a função callback apenas para retorno se for tudo ok

    console.log("Banco de dados conectado!")
})
const app = express();
app.use(express.json()); // dizer o que vai transitar com as informações do tipo Json - o express já é feito para isto

//Rota principal
app.get('/', (req, res) => {// primeiro metodo para controle de rotas
    res.status(200).send({message: "Página principal"}); // primeiro parametro(200 - sucesso na operação) segundo parametro, função callback e a mensagem a ser exibida - se tiver tudo ok na rota ele exibe pagina principal
    //Para deixar td preto no formato json add: message:
})

//criar uma nova rota livros
//se colocar qualquer outra rota do / vai retornar mensagem de erro pois só tem uma unica rota configurada.

app.get('/livros', (req,res) =>{ // Exibir todos os livros
    // utilizar .find() e trazer 02 parametros erro ou conteudo de livros e exibe no formato json
    livros.find((err, livros) =>{
        res.status(200).json(livros)
    })
})

//Consultar um livro por id
/*app.get('/livros/:id', (req, res) => {
    let index = buscarlivro(req.params.id); //parametro para trafego na url: HTTP
    res.json(livros[index])
})*/
app.get('/livros/:id', (req, res) => {
    const id = req.params.id; 
    // Utilizando findById para retornar o livro por ID / Consultar um livro por id
    livros.findById(id, (err,livros)=>{
        if(err){
            res.status(400).send("Erro na conexão!")
        }else{
            res.status(200).send(livros)
        }
    })
})

//Cadastrando um novo livro
app.post('/livros', (req,res)=>{
    //criando variavel que recebe o conteudo passado em body
    let livro = new livros(req.body);
    //gravando ele no banco
    livro.save((err)=>{
        if(err){
            res.status(500).send("Erro ao salvar livro!")

        }else{
            res.status(201).send(livro.toJSON())
        }
    })
})

//Atualizar livro por id
/*app.put('/livros/:id', (req, res) => {
    let index = buscarlivro(req.params.id); //parametro para trafego na url: HTTP
    livros[index].titulo = req.body.titulo
    res.status(200).send("Livro atualizado com sucesso!!")

})*/

//Atualizar livro por id
app.put('/livros/:id', (req, res) => {
    const id = req.params.id; 
    // Utilizando o metodo que localiza o livro por ID e atualiza o parametro
    livros.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
        if(err){
            res.status(500).send({message: err.message})
        }else{
            res.status(200).send({message: 'Livro atualizado com sucesso!!'})
        }
    })
})

//Excluindo um livro por id
app.delete('/livros/:id', (req, res) => {
    const id = req.params.id; 
    // Utilizando o metodo que localiza o livro por ID e excluir
    livros.findByIdAndDelete(id, {$set: req.body}, (err)=>{
        if(err){
            res.status(500).send({message: err.message})
        }else{
            res.status(200).send({message: 'Livro removido com sucesso!!'})
        }
    })
})

//Excluindo um livro por id
/*app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscarlivro(id);
    livros.splice(index,1) //parametro e quantidade excluida
    res.send(`O livro ${id} foi excluido com sucesso!!`)
})*/


//Cadastrando um novo livro

/*app.post('/livros', (req, res) => {
    livros.push(req.body); 
    res.status(201).send('Livro foi cadastrado com sucesso');
})

function buscarlivro(id){
    return livros.findIndex(livro => livro.id == id);
}*/
export default app

