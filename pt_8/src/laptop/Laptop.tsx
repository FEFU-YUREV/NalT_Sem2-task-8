import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { detailPages } from '../data'
import LaptopContent from './components/LaptopContent'

function Laptop() {
  const { id } = useParams()
  const laptop = detailPages.find((item) => item.id === id) ?? detailPages[0]

  return (
    <>
      <Navbar active="1" />
      <LaptopContent laptop={laptop} />
      <Footer />
    </>
  )
}

export default Laptop
