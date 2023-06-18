import * as Styles from './styles';
import carrinhoImg from '../Image/comprar-online.png';
import baloonImg from '../Image/conversa-em-grupo.png';
import userImg from '../Image/do-utilizador.png';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


const Top = ()=> {
    return (
        // TODO: Criar a parte que vai a Logo, Barra de pesquisa, Menus e personalização
            <Styles.Container>
                <Styles.Tit><Link to="/">eShop</Link></Styles.Tit>
                <Styles.BoxNav>
                    <Styles.Pesq type="text" id="pesq" name="pesq" />
                    <Styles.PesqMenu>
                        <Styles.NavMenu>

                            <Link to="/">Home</Link>
                            <Link to="/sobre">Sobre</Link>
                            <Link to="/contato">Contato</Link>

                        </Styles.NavMenu>
                    </Styles.PesqMenu>
                </Styles.BoxNav>

                <Styles.BoxPerfil>
                    <img src={carrinhoImg} alt="" width="30px"/>
                    <img src={baloonImg} alt="" width="30px"/>
                    <img src={userImg} alt="" width="30px"/>

                </Styles.BoxPerfil>
            </Styles.Container>
    );
}

export default Top;