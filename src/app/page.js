
import Certificates from "./Components/Certificates";
import Landing from "./Components/Home";
import About from "./Components/about";
import Resume from "./Components/resume";
import Projects from './Components/Projects';
import DarkModeToggle from "./darkmode";




export default function Home() {
  return (
   
  <main className=" flex flex-col  w-full h-auto overflow-x-hidden">

    <h4 className="bg-[red] absolute top-10 left-10 px-2 py-1 rounded-md text-[white]">In Progress</h4>
    
    <Landing />
    <Resume />

    <DarkModeToggle />
      <div className="mt-6 p-6 bg-gray-100 dark:bg-gray-900 rounded text-black dark:text-white">
        Content changes with dark/light mode.
      </div>

    
    <About />
    <Projects />

    
    <Certificates />
    

 
    
</main>

  );
}
