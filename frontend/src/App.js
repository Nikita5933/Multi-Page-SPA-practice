import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/HomePage";
import RootLayout from "./pages/Root";
import About, {loader as productsLoader} from "./components/AboutModule";
import Contacts from "./components/CantactsModule";
import ProductDetailPage, {loader as productDetailProduct} from './pages/ProductDetailPage'
import ErrorPage from "./pages/ErrorPage";


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
            element: <ProductDetailPage />
          }
        ]},
      {path: 'contacts', element: <Contacts />}
    ]
  }
])


function App() {
  return (<RouterProvider router={router} />);
}

export default App;

