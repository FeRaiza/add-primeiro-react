import filmes from './Services/dados.js'

const Lista = () => {
    return (
        <div>
            {filmes.map(filme => 
                    <li key = {filme.id}>
                        <h2>{filme.nome}</h2>
                        <img width={150} src = {filme.capa}/>
                        <h3>{filme.ano}</h3>
                        <h3>{filme.genero}</h3>
                        <p>{filme.descricao}</p>

                    </li>
                
                
                
                )}
        </div>
    )
}

export default Lista