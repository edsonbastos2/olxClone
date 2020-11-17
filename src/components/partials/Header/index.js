import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';

import { isLogged } from '../../../helpers/AuthHandler';

function Header() {

    let logged = isLogged();

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo1">O</span>
                        <span className="logo2">L</span>
                        <span className="logo3">X</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged &&

                            <>
                                <li>
                                    <Link to="/account">Minha conta</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Sair</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className="button">Anunciar</Link>
                                </li>
                            </>
                        }
                        {!logged &&

                            <>
                                <li>
                                    <Link to="/signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="/cadastro">Cadastrar</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className="button">Anunciar</Link>
                                </li>
                            </>

                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    )
}

export default Header;