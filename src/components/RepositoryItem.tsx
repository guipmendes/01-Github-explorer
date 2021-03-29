interface RepositoryItemProps {
    repository: {
        name: string,
        description: string,
        html_url: string,
    }
}

export function RepositoryItem(props:RepositoryItemProps){
    return(
        <li>
            <strong>{props.repository?.name ?? "Nome"}</strong>
            <p>{props.repository?.description ?? "Descrição"}</p>
            <a href={props.repository?.html_url ?? "localhost:8080"}>Acessar Repositório</a> 

        </li>
    )
}