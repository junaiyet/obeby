

import { createBrowserRouter,RouterProvider,Route, Link,createRoutesFromElements } from "react-router-dom";
import RootLayout from "./component/layout/RootLayout";
let router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
     
    </Route>
  )
);
function App() {
  
  return  <RouterProvider router={router} />;
}

export default App;
