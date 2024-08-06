import ProductForm from "../components/ProductForm";
import {useRouteLoaderData} from "react-router-dom";

export default function EditProductPage() {
    const data = useRouteLoaderData('product-detail');
    return (
      <ProductForm method="patch" product={data.product}/>
    );
}