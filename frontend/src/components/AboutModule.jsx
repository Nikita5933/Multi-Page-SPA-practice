import classes from "./AboutModule.module.css";
import {Suspense} from "react";
import {Await, useLoaderData, json, defer, Link} from "react-router-dom";
import ProductsList from "./ProductsList";

export default function About() {
    const {products} = useLoaderData();

    return (<>
        <h1 className={classes.title}>About Page</h1>
        <p className={classes.text}>List of our products</p>
        <Link to='/new'>New Product</Link>
        <div className={classes.wrapper}>
            <Suspense>
                <Await resolve={products}>
                    {(loadedProducts) => <ProductsList products={loadedProducts}/>}
                </Await>
            </Suspense>
        </div>
    </>)
}

async function loadProducts() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        return json({message: 'could not fetch events'}, {status: 500});
    } else {
        const resData = await response.json();
        return resData.events;
    }
}


export function loader() {
    return defer({
        products: loadProducts()
    })
}