import { useDispatch } from "react-redux";
import { signup } from "redux/auth/operationAuth";
import initialState from "./initialState.js";
import useForm from "shared/hook/useForm";
import fields from "./fields";
import TextField from "./TextInput";
import css from "../LoginPage/Form.module.css";


const RegisterPage = () => {
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(signup(data));
    }

    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
    const { name, email, password } = state;


    return (
        <>
            <title>Register page</title>
            <form className={css.form} onSubmit={handleSubmit}>
                <TextField  value={name} onChange={handleChange} {...fields.name}/>
                <TextField value={email} onChange={handleChange} {...fields.email} />
                <TextField value={password} onChange={handleChange} {...fields.password}/>

                <button className={css.btn} type="submit">Register</button>
            </form>
        </>
    )
}
export default RegisterPage;
