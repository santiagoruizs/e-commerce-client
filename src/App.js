import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/pages/Home';
import Store from './components/pages/Store';
import Root from './components/pages/Root';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Profile from './components/pages/Profile';
import Orders from './components/pages/Orders';
import Cart from './components/pages/Cart';
import ProductDetails from './components/pages/ProductDetails';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element = {<Root />}>
      <Route path="/home" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product/:productId" element={<ProductDetails  />}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
    </Route> ))
  return (
    <div>
      <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
