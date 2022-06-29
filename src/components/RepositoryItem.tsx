interface RepositoryItemProps {
    repository: {
        name: String,
        description: String,
        html_url: string
    }
}

export function RepositoryItem (props: RepositoryItemProps){
    return (
        <li>
            <strong>{props.repository?.name ?? 'Null'}</strong>
            <p>{props.repository?.description ?? 'Null'}</p>

            <a href={props.repository?.html_url ?? 'Null'}>
                Acessar repositório
            </a>
        </li>
    );
}