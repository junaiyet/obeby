import Image from "./component/layout/Image";
import Flex from "./component/layout/Flex";
import List from "./component/layout/List";
import ListItem from "./component/layout/ListItem";
import { RiBarChartHorizontalFill } from 'react-icons/ri';
import { useEffect, useState } from "react";
function App() {
  let [show,setShow] = useState(false);
  
  useEffect(()=>{
       function scrollWidth(e) {
        console.log(e);
       }
       window.addEventListener("resize", scrollWidth);
  },[])
  
  return (
  <nav>
   <div className="max-w-container  mx-auto p-2.5">
    <Flex className="flex">
      <div className="logo w-1/4	">
        <Image imgsrc="assets/logo.png"/>
      </div>

      <div className="w-3/4	">
    <RiBarChartHorizontalFill className="sm:hidden block ml-auto cursor-pointer" />
      
      {
        show && 
       <List className="flex justify-end gap-x-10 ">
        <ListItem className="font-dm text-sm font-bold hover:font-bold cursor-pointer"  itemname="Home"/>
        <ListItem className="font-dm text-sm font-normal hover:font-bold cursor-pointer" itemname="Shop"/>
        <ListItem className="font-dm text-sm font-normal hover:font-bold cursor-pointer" itemname="About"/>
        <ListItem className="font-dm text-sm font-normal hover:font-bold cursor-pointer" itemname="Contact"/>
        <ListItem className="font-dm text-sm font-normal hover:font-bold cursor-pointer" itemname="Journal"/>
       </List>
      }

      </div>
    </Flex>
   </div>
  </nav>
  );
}

export default App;
