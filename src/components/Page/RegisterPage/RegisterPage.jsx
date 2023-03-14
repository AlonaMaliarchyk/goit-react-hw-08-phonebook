import { useDispatch } from "react-redux";
import { signup } from "redux/Auth/operationAuth";
import InitialState from "./initialState.js";
import useForm from "shared/hook/useForm";
import fields from "./fields";
import TextField from "./TextInput";

const RegisterPage = () => {
    const dispatch = useDispatch;

    const onSubmit = (data) => {
        console.log("111", data);
        console.log("signup(data)", data);
        dispatch(signup(data));
    }

    const { state, handleChange, handleSubmit } = useForm({ InitialState, onSubmit });
    const { name, email, password } = state;
    console.log("state", state)
    return (
         <>
            <form onSubmit={handleSubmit}>
                <TextField value={name} onChange={handleChange} {...fields.name}/>
                <TextField value={email} onChange={handleChange} {...fields.email} />
                <TextField value={password} onChange={handleChange} {...fields.password}/>

                <button type="submit">Register</button>
            </form>
        </>
    )
}
export default RegisterPage;

//  <button onClick={handleSignup}>Register</button>
