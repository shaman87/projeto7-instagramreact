export default function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.src} />
            </div>
            <div className="usuario">
                {props.titulo}
            </div>
        </div>
    );
}