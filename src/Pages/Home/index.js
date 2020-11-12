import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home() {
    let email = useSelector(state => state.user.email)
    return (
        <>
            <h1>Página inicial</h1>
            <p>E-mail: {email}</p>
            <Link to="/about">Sobre</Link>
        </>
    )
}

export default Home;