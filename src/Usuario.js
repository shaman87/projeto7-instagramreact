export default function Usuario(props) {
    return(
        <div className="usuario">
            <img src={props.url} />
            <div className="texto">
                <strong>{props.usuario}</strong>
                {props.nome}
            </div>
        </div>
    );
}