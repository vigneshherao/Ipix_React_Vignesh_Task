import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import CategoryProducts from "./components/CategoryProducts";
import Users from "./components/Users";
import Cart from "./components/Cart";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/category/:id/products",
        element: <CategoryProducts/>,
      },
      {
        path:"users",
        element:<Users/>
      },
      {
        path:"cart",
        element:<Cart/>
      }
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
