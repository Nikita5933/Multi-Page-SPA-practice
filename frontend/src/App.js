import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/HomePage";
import RootLayout from "./pages/Root";
import About, {loader as productsLoader} from "./components/AboutModule";
import Contacts from "./components/CantactsModule";
import ProductDetailPage, {loader as productDetailProduct, action as deleteProductAction} from './pages/ProductDetailPage';
import {action as manipulateProductAction} from "./components/ProductForm";
import ErrorPage from "./pages/ErrorPage";
import NewProductPage from "./pages/NewProduct";
import EditProductPage from "./pages/EditProductPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {path: 'about', element: <About />, loader: productsLoader},
      {path: 'about/:productId', id: 'product-detail', loader: productDetailProduct, children: [
          {
            index: true,
            element: <ProductDetailPage />,
            action: deleteProductAction
          },
          {path: 'edit', element: <EditProductPage />, action: manipulateProductAction},
        ]},
      {path: 'new', element: <NewProductPage />, action: manipulateProductAction},

      {path: 'contacts', element: <Contacts />}
    ]
  }
])


function App() {
  return (<RouterProvider router={router} />);
}

export default App;

