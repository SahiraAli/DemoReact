// import ListGroup from "./components/ListGroup";

// import Alert from "./components/Alert";

// function App(){
// let items = [
//   'Goa',
//   'Delhi',
//   'Chennai',
//   'Mumbai',
//   'Uttarakhand'
// ];


// const handleSelectItem = (item: string) => {
//   console.log(item);
// }

  // return <div>
  //   (
  //      <ListGroup items ={items} heading="Cities" onSelectItem={handleSelectItem}/> */
  //   )
  //   </div>
// }

import { useState } from "react";
import Buttons from "./components/Buttons";
import Alert from "./components/Alert";

function App(){
const[alertVisible, alertVisibitliy] = useState(false);

  return(
    <div >
      {alertVisible && <Alert>My Alert</Alert>}
      <Buttons color="primary" onClick={()=> alertVisibitliy(true)}>Button One</Buttons>
    </div>
  );
}

export default App;