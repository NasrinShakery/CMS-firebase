import Home from "./pages/Home/Home";
import UserList from "./pages/Users/UserList";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";

const routes = [
   { path: "/", element: <Home /> },
   { path: "/userlist", element: <UserList /> },
   { path: "/newUser", element: <NewUser /> },
   { path: "/products", element: <Products /> },
   { path: "/product/:ProductID", element: <Product/> },
];
export default routes;