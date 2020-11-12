import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';

function Header() {
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
                        <li>
                            <Link to="">Login</Link>
                        </li>
                        <li>
                            <Link to="">Cadastrar</Link>
                        </li>
                        <li>
                            <Link to="" className="button">Anunciar</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    )
}

export default Header;