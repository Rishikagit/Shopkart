import { createBrowserRouter } from 'react-router-dom';
import Home from './Home.jsx';
import Products from './Products.jsx';
import Layout from '../common/Layout.jsx';
import Cart from './Cart.jsx';
import Payment from "./Payment";
import OrderSuccess from "./OrderSuccess";
import Login from "./Login.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element:<Home/>
      },
      {
        path: 'products',
        element: <Products />,
       
      },
      {
        path:"Cart",
        element:<Cart/>
      },
      {
         path: "payment", 
         element: <Payment />
         },
{ 
  path: "success", 
  element: <OrderSuccess /> },
  {
    path: "login",
    element: <Login/>
  }
 
 

    ]
  }
]);
export default router;