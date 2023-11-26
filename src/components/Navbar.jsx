// Navbar.jsx
import React from "react";

const Navbar = ({ scrollToHero, scrollToForm, scrollToList }) => {
	return (
		<nav className="bg-blue-900 text-white p-4 py-3.5 flex justify-between items-center sticky top-0 z-50">
			<div
				className="flex flex-row items-center justify-center text-center hover:text-blue-100"
				onClick={scrollToHero}
			>
				<div className="h-8 w-8 rounded-xl hover:animate-pulse">
					<img src="/bill_d.png" alt="Your Logo" className="h-8" />
				</div>
				<span className="ml-2 font-black">Bill</span>
			</div>
			<div className="flex space-x-4 font-bold">
				<button
					className="hover:text-blue-200 hover:border-b-2 border-blue-200"
					onClick={scrollToForm}
				>
					Form
				</button>
				<button
					className="hover:text-blue-100 hover:border-b-2 border-blue-200"
					onClick={scrollToList}
				>
					List
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
