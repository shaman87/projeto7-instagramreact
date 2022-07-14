function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.src} />
            </div>
            <div class="usuario">
                {props.titulo}
            </div>
        </div>
    );
}

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgTopo} />
                    {props.tituloTopo}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgConteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgCurtidas} />
                    <div class="texto">
                        Curtido por <strong>{props.curtidasUsuario}</strong> e <strong>outras {props.curtidasNumero} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    <Story src="assets/img/9gag.svg" titulo="9gag" />
                    <Story src="assets/img/meowed.svg" titulo="meowed" />
                    <Story src="assets/img/barked.svg" titulo="barked" />
                    <Story src="assets/img/nathanwpylestrangeplanet.svg" titulo="nathanwpylestrangeplanet" />
                    <Story src="assets/img/wawawicomics.svg" titulo="wawawicomics" />
                    <Story src="assets/img/respondeai.svg" titulo="respondeai" />
                    <Story src="assets/img/filomoderna.svg" titulo="filomoderna" />
                    <Story src="assets/img/memeriagourmet.svg" titulo="memeriagourmet" />
                
                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

                <div class="posts">
                    <Post 
                        imgTopo="assets/img/meowed.svg" 
                        tituloTopo="meowed" 
                        imgConteudo="assets/img/gato-telefone.svg" 
                        imgCurtidas="assets/img/respondeai.svg" 
                        curtidasUsuario="respondeai"
                        curtidasNumero="101.523" 
                    />
                    <Post 
                        imgTopo="assets/img/barked.svg" 
                        tituloTopo="barked" 
                        imgConteudo="assets/img/dog.svg" 
                        imgCurtidas="assets/img/adorable_animals.svg" 
                        curtidasUsuario="adorable_animals"
                        curtidasNumero="99.159" 
                    />
                </div>
            </div>

            <div class="sidebar">
                <div class="usuario">
                    <img src="assets/img/catanacomics.svg" />
                    <div class="texto">
                        <strong>catanacomics</strong>
                        Catana
                    </div>
                </div>

                <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>

                    <Sugestao img="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes" razao="Segue você" />
                    <Sugestao img="assets/img/chibirdart.svg" nome="chibirdart" razao="Segue você" />
                    <Sugestao img="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar" razao="Novo no Instagram" />
                    <Sugestao img="assets/img/adorable_animals.svg" nome="adorable_animals" razao="Segue você" />
                    <Sugestao img="assets/img/smallcutecats.svg" nome="smallcutecats" razao="Segue você" />
                </div>

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    );
}