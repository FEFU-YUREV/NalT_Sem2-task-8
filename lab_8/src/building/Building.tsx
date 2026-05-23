import { useParams } from 'react-router-dom'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { detailPages } from "../data"
import Content from "./components/Content"

function Building() {
  const { id } = useParams();
  const struct = detailPages.find((item) => item.id === id) ?? detailPages[0];

  return (
    <>
      <Navbar active="1"/>
      <Content struct={struct}/>
      <Footer/>
    </>
  );
}

export default Building;
