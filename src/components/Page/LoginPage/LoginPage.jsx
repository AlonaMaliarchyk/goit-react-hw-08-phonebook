import { useDispatch } from "react-redux";
import TextField from "../RegisterPage/TextInput";
import { login } from "../../../redux/auth/operationAuth";
import initialState from "./initialState.js";
import useForm from "shared/hook/useForm";
import fields from "./fields.js";
import css from "./Form.module.css"

const LoginPage = () => {
    const dispatch = useDispatch();
    const onSubmit = (credentials) => {
        dispatch(login(credentials));
    }
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
    const { email, password } = state;

    return (
        <>
            <title>Login page</title>
            <form className={css.form} onSubmit={handleSubmit}>
            <TextField  value={email} onChange={handleChange} {...fields.email} />
            <TextField  value={password} onChange={handleChange} {...fields.password} />
            <button className={css.btn} type="submit">Login</button>
        </form>
        </>
    )
}
export default LoginPage;
