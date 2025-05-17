
import Landing from "./Components/Home";
import About from "./Components/about";




export default function Home() {
  return (
   
  <main className=" flex flex-col  w-full h-auto overflow-x-hidden">

    <h4 className="bg-[red] absolute top-10 left-10 px-2 py-1 rounded-md text-[white]">In Progress</h4>
    <Landing />
    <About />

 
    
</main>

  );
}
