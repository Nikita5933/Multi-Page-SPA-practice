import {Link} from "react-router-dom";
import Product from "./Product";
import classes from "./ProductsListModule.module.css";

export default function ProductsList({products}) {
    return (<ul>
        {products.map(item => (
            <li className={classes.liProduct} key={item.id}>
            <Link to={`/about/${item.id}`}>
               <Product front={true} product={item}/>
            </Link>
                <div className={classes.divider}></div>
            </li>
        ))}
    </ul>);
}