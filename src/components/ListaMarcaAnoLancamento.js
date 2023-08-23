import MarcaAnoLancamento from "./MarcaAnoLancamento"

/* Arquivo para uso de FRAGMENTS (nao necessita do uso do elemento pai ex: o valor da tag que usaria como uma <div> passa-se a ser vazia) */
// PESQUISAR SOBRE A NECESSIDADE DO USO DA DIV COMO ELEMENTO PAI OU USAR APENAS FRAGMENTS
function ListaMarcaAnoLancamento(){
    return(
        <> {/* tag pai vazia */}
        <h1>Minha Lista</h1>
        <ul>
            < MarcaAnoLancamento marca="Ferrari" ano_lancamento={1985}/>{/* utilizando fragment com reaproveitamento de componente (componente Item) */}
            < MarcaAnoLancamento marca="Fiat" ano_lancamento={1964}/>
            < MarcaAnoLancamento marca="Renault"/>
            <MarcaAnoLancamento marca="Chevrolet" ano_lancamento={1999}/>
            <MarcaAnoLancamento/>{/*esse cara ta vazio pq foi declarado como defaultProps*/}
        </ul>
        </>
    )
}export default ListaMarcaAnoLancamento