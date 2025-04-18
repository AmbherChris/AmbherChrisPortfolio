import NavBar from "./Components/NavBar";
import Landing from "./Components/Home";
import Skills from "./Components/Skills";
import About from "./Components/about";



export default function Home() {
  return (
    <div className="">
    <div >
    <NavBar />
    <Landing/>
    <About />
    <Skills />  
    </div>
    </div>
  );
}
