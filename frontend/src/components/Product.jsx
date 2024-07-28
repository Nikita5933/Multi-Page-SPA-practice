import classes from "./ProductModule.module.css";
export default function Product({product}) {
    return (
        <div className={classes.product}>
            <img src={product.image} alt={product.title}/>
            <h3>{product.title}</h3>
        </div>
    )
}