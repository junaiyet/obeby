

import { createBrowserRouter,RouterProvider,Route, Link,createRoutesFromElements } from "react-router-dom";
import RootLayout from "./component/layout/RootLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shope from "./pages/Shope";
let router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
     <Route index element={<Home/>}></Route>
     <Route path="/shop" element={<Shope  />}></Route>
     <Route path="/about" element={<About  />}></Route>
     <Route path="/contact" element={<Contact  />}></Route>
    </Route>
    //footer bottom korty hoby and shope ar sort by  show aigula component korty hoby 191232
  )
);
function App() {
  
  return  <RouterProvider router={router} />;
}

export default App;
