import { skills } from "../db/db";
import { aboutMe } from "../db/db";
import { Hobby } from "../db/db";


export default function About() {





    const grouped = skills.reduce((acc, skills) => {
        if (!acc[skills.type]) {
            acc[skills.type] = [];
        }
        acc[skills.type].push(skills);
        return acc;
    }, {});




    return (
        <div className="about_container">

            <h2 className="about_title">About Me</h2>


            <div className="about_word_container">
                <div className="personal_info_container">
                    {/* IMAGE SECTION */}
                    <div className="pic_container">
                        <div className="bg-[url('/me.jpg')] bg-[size:170%] bg-[position:50%_50%] w-50 h-full rounded-[20px]"></div>
                    </div>


                    {/* TEXT SECTION */}

                    <div>
                        <p className="about_name">{aboutMe[0].myName}</p>
                        <p>Address: {aboutMe[0].address}</p>
                        <p>Age: {aboutMe[0].age}</p>
                        <p>Birthday:{aboutMe[0].bday}</p>
                        <p>Nationality: {aboutMe[0].nationality}</p>
                    </div>
                </div>






                <p className="  about_words">
                    &nbsp; &nbsp; I'm a  UI/UX designer with a passion for creating simple and beautiful designs that are easy to use. I love designing apps and websites that deliver a great experience for users, and I always focus on making things clean, functional, and user-friendly.
                    <br />
                    <br />
                    &nbsp; &nbsp;I specialize in front-end development with a keen eye for design. Whether it’s building websites or apps, I enjoy making sure everything looks great and works smoothly.
                    <br />
                    <br />
                    &nbsp;&nbsp;When I’m not designing, you’ll probably find me watching anime, reading manga and manhua, or sipping on coffee. Designing and staying creative is what keeps me inspired every day.
                </p>
            </div>

            <h3 className="z-5 mt-20 text-md font-semibold text-2xl  ">Skills</h3>

            <div className="skills_container">
                {Object.entries(grouped).map(([type, skills]) => (
                    <div key={type} >

                        <h2 className="type_of_skills">{type}</h2>
                        <div className=" flex items-center flex-wrap gap-3 ">

                            {skills.map(skills => (
                                <div key={skills.name} className="skills_name_container  ">
                                    <img src={skills.image} alt={skills.name} className="skills_icon " />
                                    <p className="skills_name">{skills.name}</p>

                                </div>
                            ))}
                        </div>


                    </div>
                ))}



            </div>

<hr />


            <div className="skills_container">
                <h2 className="type_of_skills">Hobbies</h2>
                <div className="flex items-center gap-3 flex-wrap ">
                    {Hobby.map((item, index) => (
                        <div key={index} className="skills_name_container">
                            <img src={item.icon} alt={item.hobby} className="hobby_icons" />
                            <p className="skills_name">{item.hobby}</p>
                        </div>
                    ))}
                </div>
            </div>








        </div>
    )
}