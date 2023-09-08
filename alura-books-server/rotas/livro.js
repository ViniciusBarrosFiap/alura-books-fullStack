const {Router} = require("express");//Router: ferramenta do express para criar rotas
const {getLivros, getLivro, postLivro, patchLivro, deleteLivro} = require("../controladores/livro");
const router = Router();//variavel que cria uma instancia do Router
//Responsavel pela leitura de dados
router.get("/", getLivros)
router.get("/:id", getLivro)

//Responsavel por inserir dados
router.post('/', postLivro)

//Responsavel por editar dados
router.patch('/:id', patchLivro)

//Responsavel pela exclução de dados
router.delete('/:id', deleteLivro)

module.exports = router;