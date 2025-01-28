import Header from "../components/Header"
import About from "@components/About"
import Mission from "@components/Mission"
import GoUp from "@components/ui/GoUpBtn/GoUp"
export default function Home() {
  return (
    <div>
      <Header/>
      <About />
      <Mission />
      <GoUp />
    </div>
  )
}
