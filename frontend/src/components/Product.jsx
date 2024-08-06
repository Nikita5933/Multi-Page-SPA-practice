import classes from "./ProductModule.module.css";
import {Link, useSubmit} from "react-router-dom";
export default function Product({product}) {
    const submit = useSubmit();
    function handleDelete() {
        submit(null, {method: "delete"});
    }
    return (
        <>
        <div className={classes.product}>
            <img src={product.image} alt={product.title}/>
            <h3>{product.title}</h3>
            <p>{product.date}</p>
        </div>
            <menu>
                <Link to='edit'>Edit</Link>
                <button onClick={handleDelete}>Delete</button>
            </menu>
            <p className={classes.product}>{product.description}</p>
        </>
    )
}