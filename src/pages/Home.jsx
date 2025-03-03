import Header from "../components/Header"
import About from "@components/About"
import Expertises from "@components/Expertises"
import GoUp from "@components/ui/GoUpBtn/GoUp"
export default function Home() {
  return (
    <div>
      <Header/>
      <About />
      <GoUp />
      <Expertises />
    </div>
  )
}
