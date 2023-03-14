import { useState, useCallback } from "react";

const useForm = ({ initialState, onSubmit }) => {
    // const [state, setState] = useState({ ...initialState });
    const [state, setState] = useState({ ...initialState });

   const handleChange = useCallback(({target}) => {
        const {name, value} = target;
        setState(prevState => {
            return {...prevState, [name]: value}
        })
    }, [setState]);

    const handleSubmit = (e) => {
        console.log("eeeee", e);
        e.preventDefault();
        console.log("111onSubmit", onSubmit);
        console.log("223333onSubmit", { ...state } );
        onSubmit({ ...state });
        setState({ ...initialState });
        console.log("{ ...state }", { ...state });
        console.log("{ ...initialState }", { ...initialState })
    }
    return {state, setState, handleChange, handleSubmit}
}
export default useForm;