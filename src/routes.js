import Home from "./pages/Home/Home";
import UsersList from "./pages/Users/UsersList";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";

const routes = [
   { path: "/", element: <Home /> },
   { path: "/userslist", element: <UsersList /> },
   { path: "/newUser", element: <NewUser /> },
   { path: "/products", element: <Products /> },
];
export default routes;