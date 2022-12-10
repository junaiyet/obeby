import Image from "./component/layout/Image";
import Flex from "./component/layout/Flex";
import List from "./component/layout/List";
import ListItem from "./component/layout/ListItem";
function App() {
  return (
  <nav>
   <div className="max-w-container bg-red-500 mx-auto">
    <Flex className="flex">
      <div className="logo w-1/4	">
        <Image imgsrc="assets/logo.png"/>
      </div>
      <div className="w-3/4	">
       <List className="flex justify-center">
        <ListItem className="text-white" itemname="Home"/>
        <ListItem itemname="Shop"/>
        <ListItem itemname="About"/>
        <ListItem itemname="Contact"/>
        <ListItem itemname="Journal"/>
       </List>

      </div>
    </Flex>
   </div>
  </nav>
  );
}

export default App;
