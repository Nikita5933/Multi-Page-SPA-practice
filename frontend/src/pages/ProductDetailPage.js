import {Suspense} from "react";
import {Await, defer, json, useRouteLoaderData} from "react-router-dom";
import Product from "../components/Product";

export default function ProductDetailPage() {
    const {product} = useRouteLoaderData('product-detail');
    return (<>
    <Suspense>
        <Await resolve={product}>{(product) => <Product product={product} />}</Await>
    </Suspense>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum doloribus earum, ipsum magni mollitia nisi nulla officia quas quis ratione? Delectus eligendi et illo molestias mollitia nisi pariatur ullam ut!</p>
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

async function loadProduct(id) {
    const response = await fetch('http://localhost:8080/events/' + id);
    if (!response.ok) {
        throw json({message: 'could not fetch details fo selected event'}, {status: 500})
    } else {
        const resData = await response.json();
        return resData.event;
    }
}

export async function loader({params}) {
    const id = params.productId;
    console.log(id)
    return defer({
        products: loadProducts(),
        product: await loadProduct(id)
    })
}