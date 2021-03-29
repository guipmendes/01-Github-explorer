export function RepositoryItem(props){
    return(
        <li>
            <strong>{props.repository?.name ?? "Nome"}</strong>
            <p>{props.repository?.description ?? "Descrição"}</p>
            <a href={props.repository?.link ?? "localhost:8080"}>Acessar Repositório</a> 

        </li>
    )
}