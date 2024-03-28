import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/product",
        element:<ProductDetail/>
      }
    ]
  }
])


function App() {
  return (
    <div>
      <Navbar/>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
