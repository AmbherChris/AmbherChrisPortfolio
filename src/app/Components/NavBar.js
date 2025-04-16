

export default function NavBar() {
    return (
        <nav className=" sticky top-0 flex items-center justify-center pt-10 ">
            <ul className="flex space-x-10 bg-[#353439] h-15 w-170 justify-center items-center rounded-2xl shadow-lg "> 
                
                <li><a href="#" className="navbar_text">Home</a></li>
                <li><a href="#" className="navbar_text">About</a></li>
                <li><a href="#" className="navbar_text">Skills</a></li>
                <li><a href="#" className="navbar_text">Projects</a></li>
                <li><a href="#" className="navbar_text">Certificates</a></li>
            </ul>
        </nav>
    );
}
