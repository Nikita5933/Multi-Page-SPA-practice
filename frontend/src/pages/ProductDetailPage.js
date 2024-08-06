import {Suspense} from "react";
import {Await, defer, json, redirect, useRouteLoaderData} from "react-router-dom";
import Product from "../components/Product";

export default function ProductDetailPage() {
    const {product} = useRouteLoaderData('product-detail');
    return (<>
    <Suspense>
        <Await resolve={product}>{(product) => <Product product={product} />}</Await>
    </Suspense>
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

export async function action({params, request}) {
    const productId = params.productId;
    const response = await fetch('http://localhost:8080/events/' + productId, {
        method: request.method
    });

    if (!response.ok) {
        throw json({message: 'could not delete event'}, {status: 500})
    }
    return redirect('/about');
}