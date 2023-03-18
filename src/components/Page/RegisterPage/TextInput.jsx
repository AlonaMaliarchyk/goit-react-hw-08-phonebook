import { useMemo } from "react";
import { nanoid } from "nanoid";
import css from "./textInput.module.css";
import 'semantic-ui-css/semantic.min.css';

const TextField = ({label, handleChange, ...props}) => {
    const id = useMemo(()=> nanoid(), []);

    return (
        <div className={css.wrapInput}>
            <label htmlFor={id}>{label}</label>
            <input id={id} onChange={handleChange} {...props} />
        </div>
    )
}

export default TextField;
