import { useEffect, useState } from "react";
import Image from "./Image";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { RiBarChartHorizontalFill } from 'react-icons/ri';
import Container from "./Container";

function Navber() {
    let [show,setShow] = useState(true);
      
    useEffect(()=>{
         function scrollWidth() {
          if(window.innerWidth < 1024){
            setShow(false)
    
          }else(
            setShow(true)
          )
         }
         scrollWidth()
         window.addEventListener("resize", scrollWidth);
    },[])
  return (
    <nav className="py-8">
    <Container >
     <Flex className="lg:flex">
       <div className="logo lg:w-1/4	">
         <Image imgsrc="assets/logo.png"/>
       </div>
 
       <div className="lg:w-3/4	w-full">
     <RiBarChartHorizontalFill onClick={()=>setShow(!show)} className=" block lg:hidden ml-auto cursor-pointer absolute top-2.5 right-2.5" />
       
       {
         show && 
        <List className="lg:flex justify-end gap-x-10 mt-5 lg:mt-0">
         <ListItem className="font-dm text-sm font-bold hover:font-bold cursor-pointer my-2.5 lg:my-0" href='/'  itemname="Home"/>
         <ListItem className="font-dm text-sm font-normal hover:font-bold cursor-pointer my-2.5 lg:my-0" href='/shop' itemname="Shop"/>
         <ListItem className="font-dm text-sm font-normal hover:font-bold cursor-pointer my-2.5 lg:my-0" href="/about" itemname="About"/>
         <ListItem className="font-dm text-sm font-normal hover:font-bold cursor-pointer my-2.5 lg:my-0" href='/contact' itemname="Contact"/>
         {/* <ListItem className="font-dm text-sm font-normal hover:font-bold cursor-pointer my-2.5 lg:my-0"  itemname="Journal"/> */}
        </List>
       }
 
       </div>
     </Flex>
    </Container>
   </nav>
  )
}

export default Navber