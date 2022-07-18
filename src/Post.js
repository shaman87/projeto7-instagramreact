import React from "react";

export default function Post(props) {
    const [botaoCurtir, setCurtir] = React.useState("heart-outline");

    function curtir() {
        if(botaoCurtir === "heart-outline") {
            setCurtir("heart");
        } else {
            setCurtir("heart-outline");
        }
    }

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imgTopo} />
                    {props.tituloTopo}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.imgConteudo} onClick={() => setCurtir("heart")}/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={botaoCurtir} onClick={curtir}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.imgCurtidas} />
                    <div className="texto">
                        Curtido por <strong>{props.curtidasUsuario}</strong> e <strong>outras {props.curtidasNumero} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}