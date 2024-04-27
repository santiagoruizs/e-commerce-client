import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/pages/Home';
import Store from './components/pages/Store';
import Root from './components/pages/Root';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element = {<Root />}>
      <Route path="/home" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} /> */}
    </Route> ))
  return (
    <div>
      <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
