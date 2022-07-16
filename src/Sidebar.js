import Usuario from "./Usuario";
import Sugestao from "./Sugestao";

const dadosUsuario = [
    {url: "assets/img/catanacomics.svg", usuario: "catanacomics", nome: "Catana"}
];

const dadosSugestoes = [
    {img: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você"},
    {img: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você"},
    {img: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram"},
    {img: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você"},
    {img: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você"},
];

export default function Sidebar() {
    return (
        <div className="sidebar">
            {dadosUsuario.map(usuarioDados => <Usuario url={usuarioDados.url} usuario={usuarioDados.usuario} nome={usuarioDados.nome} />)}

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {dadosSugestoes.map(sugestoes => <Sugestao img={sugestoes.img} nome={sugestoes.nome} razao={sugestoes.razao} />)}
            </div>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}