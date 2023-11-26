import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-blue-800 text-white py-6 min-h-screen text-sm sm:text-base">
			<div className="max-w-4xl mx-auto p-4 md:p-8 flex flex-col items-center justify-center">
				<div className="text-center">
					<p className="text-xl font-semibold mb-2 mt-20">About</p>
					<p className="text-gray-300">
					Bill Invoice App is a lightweight, beautiful, and comprehensive invoicing application built with Vite, React, and Tailwind CSS. The app allows users to create, manage, and print PDF invoices easily.
					</p>

					<p className="text-gray-300 mb-4">
						This is a Portfolio Project for Dyrane Franchise.
					</p>
				</div>
				<div className="flex space-x-4 mb-4">
					<a
						href="https://www.linkedin.com/in/dyrane-alexander-1852309b"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin size={20} />
					</a>
					<a
						href="https://github.com/Dr-dyrane"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub size={20} />
					</a>
					<a
						href="https://twitter.com/Dr_dyrane"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTwitter size={20} />
					</a>
					<a
						href="https://instagram.com/dyrane"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram size={20} />
					</a>
				</div>
				<div className="text-center mb-4">
					<a
						href="https://github.com/Dr-dyrane/bill"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub Repository
					</a>
				</div>
				<div className="text-center text-gray-300">
					&copy; {new Date().getFullYear()} Dyrane's Invoice App - Bill
				</div>
			</div>
		</footer>
	);
};

export default Footer;
