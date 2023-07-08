import Top from './Elements/top';
import './styles/home.css';
import logoImg from './Image/logo.png';
import lupaImg from './Image/lupa.png';
import bannerImg from './Image/banner-02.webp';

const Home = ()=> {
    return (
        // TODO: Criar a parte que vai a Logo, Barra de pesquisa, Menus e personalização
        <>
            <Top />
            <header>
                <div class={'content'}>
                    <div id={'logo'}>
                        <img src={logoImg} alt={'Logo da loja'}/>
                    </div>

                    <div id={'pesquisa'}>
                        <input type={'text'} placeholder={'O que você está procurando?'}/>
                        <select id={'categoria'} name={'categoria'}>
                            <option value="">Categoria</option>
                            <option value="Nao sei">Não sei</option>
                            <option value="Sem idei">Sem ideia</option>
                            <option value="Socorro">Socorro</option>
                        </select>
                        <button type={'button'}>
                            <img src={lupaImg} alt={"Buscar"}/>
                        </button>
                    </div>

                    <div id={'menu-usuario'}>
                        <ul>
                            <li><i class={'icon-shuffle'}></i></li>
                            <li><i class={'icon-user'}></i></li>
                            <li><i class={'icon-heart'}></i></li>
                            <li><i class={'icon-handbag'}></i></li>
                        </ul>
                    </div>
                </div>

                <div class={"menuBar"}>
                    <div id={'menuArea'}>
                        <div id={'areaCategoria'}>
                            <h1>Categorias</h1>
                        </div>
                        <div id={'navMenu'}>
                            <ul>
                                <li>Home</li>
                                <li>Loja</li>
                                <li>Sobre Nós</li>
                                <li>Contato</li>
                                <li>Lançamentos</li>
                                <li>Paginas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <section id={"banner"}>
                <div id={'banner-content'}>
                    <div id={"categ"}>
                        <ul>
                            <li><i class={'icon-grid'}></i> Acessórios</li>
                            <li><i class={'icon-printer'}></i> Componentes</li>
                            <li><i className={'icon-screen-desktop'}></i> Computadores e Notebooks</li>
                            <li><i className={'icon-mouse'}></i> Periféricos</li>
                            <li><i className={'icon-feed'}></i> Redes e Conectividade</li>
                            <li><i className={'icon-disc'}></i> Software e Licenças</li>
                            <li><i className={'icon-settings'}></i> Assistência Técnica</li>
                        </ul>
                    </div>

                    <div id={'banner-img'}>
                        <img src={bannerImg} alt={'Monte seu pc gamer'} />
                    </div>
                </div>

            </section>
        </>
    );
}

export default Home;