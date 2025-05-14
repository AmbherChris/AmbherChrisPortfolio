
export default function About() {

    const items = [
        {
            name: "HTML",
            image: "/html.png",
            type: "Frontend"
        },
        {
            name: "CSS",
            image: "/css.png",
            type: "Frontend"
        },
        {
            name: "Tailwind",
            image: "/tailwind.png",
            type: "CSS Framework"
        },
        {
            name: "Javascript",
            image: "/js.png",
            type: "Frontend"
        },
        {
            name: "Next.JS",
            image: "/nextjs.png",
            type: "Framework"
        },
        {
            name: "React.JS",
            image: "/react.png",
            type: "Framework"
        },
        {
            name: "React Native",
            image: "/react.png",
            type: "Framework"
        },
        {
            name: "Node.JS",
            image: "/nodejs.png",
            type: "Backend"
        },
        {
            name: "Blender 3d",
            image: "/blender.png",
            type: "Design Tool"
        },
        {
            name: "Figma",
            image: "/figma.svg",
            type: "Design Tool"
        },
        {
            name: "NPM",
            image: "/npm.svg",
            type: "Tool"
        },
        {
            name: "Expo Go",
            image: "/expo.png",
            type: "Tool"
        },
        {
            name: "Git",
            image: "/git.svg",
            type: "Version Control"
        },
        {
            name: "Github",
            image: "/github.png",
            type: "Version Control"
        },
    ];


    const grouped = items.reduce((acc, item) => {
        if (!acc[item.type]) {
            acc[item.type] = [];
        }
        acc[item.type].push(item);
        return acc;
    }, {});




    return (
        <div className="flex flex-col  h-300 w-full items-center gap-5 pt-10">
            <div className=" flex justify-center w-[80%] h-auto bg-[#f8f9fa] absolute z-4 top-110 px-2 pt-2 pb-11 rounded-[23px] text-center shadow-md">
                <div className="bg-[url('/me.jpg')] bg-[size:170%] bg-[position:50%_50%]  w-[100%] h-80   rounded-[20px] ">
                    <h3 className="text-sm mt-83 font-bold text-black">AMBHER CHRIS NARCISO</h3>
                </div>
            </div>


            <div className="flex bg-[#f8f9fa] w-[95%] h-135 mt-80 rounded-[20px] z-1  justify-center shadow-md pb-4">
                <p className="mt-35 text-[12px] w-[78%]  text-justify">
                    &nbsp; &nbsp; I'm a  UI/UX designer with a passion for creating simple and beautiful designs that are easy to use. I love designing apps and websites that deliver a great experience for users, and I always focus on making things clean, functional, and user-friendly.
                    <br />
                    <br />
                    &nbsp; &nbsp;I specialize in front-end development with a keen eye for design. Whether it’s building websites or apps, I enjoy making sure everything looks great and works smoothly.
                    <br />
                    <br />
                    &nbsp;&nbsp;When I’m not designing, you’ll probably find me watching anime, reading manga and manhua, or sipping on coffee. Designing and staying creative is what keeps me inspired every day.
                </p>
            </div>
<h3 className="z-5 top-200 text-md font-semibold ">Skills</h3>
            <div className="bg-[#f8f9fa] w-full  text-center h-auto pt-4 pb-11  shadow-md">

                
                {Object.entries(grouped).map(([type, items]) => (
                    <div key={type}>

                        <h2 className="text-3 font-bold">{type}</h2>
                        <div className="flex items-center justify-center gap-3 ">

                            {items.map(item => (
                                <div key={item.name} className="flex  bg-[#f8f9fa] w-fit h-auto p-2 items-center justify-center text-center gap-2 rounded-lg my-2 shadow-sm ">
                                    <img src={item.image} alt={item.name} className="w-4 h-auto " />
                                    <p className="text-[10px]">{item.name}</p>

                                </div>
                            ))}
                        </div>

                        
                    </div>
                ))}



            </div>



        </div>
    )
}