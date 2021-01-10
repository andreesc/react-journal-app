import {Link} from 'react-router-dom';
import {useForm} from "../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import {startGoogleLogin, startLoginEmailPassword} from "../../actions/auth";

function LoginScreen () {

    const dispatch = useDispatch();

    const {loading} = useSelector(state => state.ui);


    const [formValues, handleInputChange, reset] = useForm({
       email: '',
       password: ''
    });

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email,password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={loading}
                >
                    Ingresar
                </button>
                <hr/>
                <div className="auth__social-networks">
                    <p>Login with social networks:</p>
                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link className="link" to="/auth/register">
                    Create new account
                </Link>
            </form>
        </>
    )

}
export default LoginScreen;