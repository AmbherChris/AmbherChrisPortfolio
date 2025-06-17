
import Certificates from "./Components/Certificates";
import Landing from "./Components/Home";
import About from "./Components/about";
import Resume from "./Components/resume";
import Projects from './Components/Projects';
import DarkModeToggle from "./darkmode";
import NavBar from "./Components/NavBar";




export default function Home() {
  return (

    <>
    <nav className="flex sticky top-0 justify-center z-10"><NavBar /></nav>
   
  <main className=" flex flex-col  w-full h-auto overflow-x-hidden">
    

    <h4 className="bg-[red] absolute top-10 left-10 px-2 py-1 rounded-md text-[white]">In Progress</h4>
    
    <Landing />
    <Resume />

    

    
    <About />
    <Projects />

    
    <Certificates />
    

 
    
</main>
</>

  );
}
