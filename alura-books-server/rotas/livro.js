const {Router} = require("express");//Router: ferramenta do express para criar rotas
const {getLivros} = require("../controladores/livro")
const router = Router();//variavel que cria uma instancia do Router
//Responsavel pela leitura de dados
router.get("/", getLivros)
//Responsavel por inserir dados
router.post('/', (req, res)=>{
    res.send("Você fez uma requisição do tipo post")
})
//Responsavel por editar dados
router.patch('/', (req, res)=>{
    res.send("Você fez uma requisição do tipo patch")
})
//Responsavel pela exclução de dados
router.delete('/', (req, res)=>{
    res.send("Você fez uma requisição do tipo delete")
})
module.exports = router;