// import logo from "../assets/cover.png";
import logo from "../assets/profile.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
	return (
		<nav className="mb-20 flex items-center justify-between py-6">
			<div className="flex flex-shrink-0 item-center">
				<img className="mx-3 w-12" src={logo} alt="logo" />
			</div>
			<div className="m-8 flex item-center justify-center gap-4 text-2xl">
				<a href="https://www.linkedin.com/in/anshulramdham" target="_blank" rel="noopener noreferrer">
					<FaLinkedin />
				</a>
				<a href="https://github.com/FuryAnshul" target="_blank" rel="noopener noreferrer">
					<FaGithub />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
