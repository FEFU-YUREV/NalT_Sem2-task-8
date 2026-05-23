import Navbar from "../components/Navbar"
import Content from "./components/Content"
import Gallery from "./components/Gallery"
function Main() {
  return (
     <div>
       <Navbar active="1"/>
       <Gallery/>
       <Content/>
     </div>
   );
}
export default Main;