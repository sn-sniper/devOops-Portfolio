import Header from "../components/Header"
import About from "@components/About"
import Expertises from "@components/Expertises"
import GoUp from "@components/ui/GoUpBtn/GoUp"
import HContact from "@components/HContact"
import Footer from "@components/Footer"

import "@styles/Home.css"
export default function Home() {
  return (
    <div className="Home">
      <Header/>
      <About />
      <GoUp />
      <Expertises />
      <HContact />
      <Footer />
    </div>
  )
}
