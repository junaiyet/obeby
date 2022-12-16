
import { useEffect, useState } from "react";
import Navber from "./component/layout/Navber";
import { createBrowserRouter,RouterProvider,Route, Link,createRoutesFromElements } from "react-router-dom";
function App() {
let route =   createRoutesFromElements(
  <Route path="/" element={<Navber/>}>
  </Route>
)
  
  return (
     <Navber/>
  );
}

export default App;
