import Story from "./Story";
import Post from "./Post";

const dadosStories = [
    {src: "assets/img/9gag.svg", titulo: "9gag"},
    {src: "assets/img/meowed.svg", titulo: "meowed"},
    {src: "assets/img/barked.svg", titulo: "barked"},
    {src: "assets/img/nathanwpylestrangeplanet.svg", titulo: "nathanwpylestrangeplanet"},
    {src: "assets/img/wawawicomics.svg", titulo: "wawawicomics"},
    {src: "assets/img/respondeai.svg", titulo: "respondeai"},
    {src: "assets/img/filomoderna.svg", titulo: "filomoderna"},
    {src: "assets/img/memeriagourmet.svg", titulo: "memeriagourmet"}
];

const dadosPosts = [
    {imgTopo: "assets/img/meowed.svg", tituloTopo:"meowed", imgConteudo: "assets/img/gato-telefone.svg", imgCurtidas: "assets/img/respondeai.svg", curtidasUsuario: "respondeai", curtidasNumero: "101.523"},
    {imgTopo: "assets/img/barked.svg", tituloTopo:"barke", imgConteudo: "assets/img/dog.svg", imgCurtidas: "assets/img/adorable_animals.svg", curtidasUsuario: "adorable_animals", curtidasNumero: "99.159"}
];

export default function Esquerda() {
    return (
        <div class="esquerda">
            <div class="stories">
                {dadosStories.map(stories => <Story src={stories.src} titulo={stories.titulo} />)}
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>

            <div class="posts">
                {dadosPosts.map(posts => <Post 
                    imgTopo={posts.imgTopo} 
                    tituloTopo={posts.tituloTopo} 
                    imgConteudo={posts.imgConteudo} 
                    imgCurtidas={posts.imgCurtidas} 
                    curtidasUsuario={posts.curtidasUsuario} 
                    curtidasNumero={posts.curtidasNumero} 
                />)}
            </div>
        </div>
    );
}