import classes from "./ProductModule.module.css";
import {Link, useSubmit} from "react-router-dom";
export default function Product({product, front}) {
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
            <menu className={front ? classes.menu: classes.buttons}>
                <button><Link to='edit'>Edit</Link></button>
                <button onClick={handleDelete}>Delete</button>
            </menu>
            <p className={classes.product}>{product.description}</p>
        </>
    )
}