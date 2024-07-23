import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/HomePage";
import RootLayout from "./pages/Root";
import About from "./components/AboutModule";
import Contacts from "./components/CantactsModule";
import ErrorPage from "./pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {path: 'about', element: <About />},
      {path: 'contacts', element: <Contacts />}
    ]
  }
])


function App() {
  return (<RouterProvider router={router} />);
}

export default App;

