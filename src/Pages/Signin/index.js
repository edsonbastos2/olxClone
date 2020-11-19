import { useState } from 'react';
import { PageArea } from './styled';
import { PageContainer, PageTitle, ErrorMenssage } from '../../components/mainComponents';
import OlxApi from '../../helpers/OlxApi';
import { doLogin } from '../../helpers/AuthHandler';

function Signin() {

    const api = OlxApi();

    const [email, setEmail] = useState('');
    const [passaword, setpassaword] = useState('');
    const [remenberPassword, setremenberPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setDisabled(true);

        const json = await api.login(email, passaword);

        if (json.error) {
            setError(json.error)
        } else {
            doLogin(json.token, remenberPassword);
            window.location.href = "/";
        }

        setDisabled(false);
    }

    return (
        <>
            <PageContainer>
                <PageTitle>Login</PageTitle>
                <PageArea>
                    {error &&
                        <ErrorMenssage>{error}</ErrorMenssage>
                    }
                    <form action="" onSubmit={handleSubmit}>
                        <label className="area">
                            <div className="area--title">E-mail</div>
                            <div className="area--input">
                                <input
                                    type="email"
                                    disabled={disabled}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Senha</div>
                            <div className="area--input">
                                <input
                                    type="password"
                                    disabled={disabled}
                                    value={passaword}
                                    onChange={e => setpassaword(e.target.value)}
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Lembrar senha</div>
                            <div className="area--input">
                                <input
                                    type="checkbox"
                                    disabled={disabled}
                                    checked={remenberPassword}
                                    onChange={() => setremenberPassword(!remenberPassword)}
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title"></div>
                            <div className="area--input">
                                <button disabled={disabled}>Fazer Login</button>
                            </div>
                        </label>
                    </form>
                </PageArea>
            </PageContainer>
        </>
    )
}

export default Signin;