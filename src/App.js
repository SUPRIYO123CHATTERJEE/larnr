import { Outlet } from "react-router-dom";
import Appprovider from "./context";


export default function App() {
// const Appprovider =(children)=>{
//   <Appcontext.Provider>{children}</Appcontext.Provider>


  return (
    <div>
      <Appprovider>
     <Outlet/>
     </Appprovider>
     
     
    </div>
  )
}

