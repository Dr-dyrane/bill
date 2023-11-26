// src/pages/Home.js
import React, { useState, useEffect, useRef } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

function Home({ invoices, addInvoice }) {
	const heroRef = useRef(null);
	const formRef = useRef(null);
	const listRef = useRef(null);

	const scrollToHero = () => {
		heroRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToForm = () => {
		formRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToList = () => {
		listRef.current.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<>
			<Navbar
				scrollToHero={scrollToHero}
				scrollToForm={scrollToForm}
				scrollToList={scrollToList}
			/>
			<div ref={heroRef}>
				<HeroSection scrollToForm={scrollToForm} />
			</div>
			<div className="z-30" ref={formRef}>
				<Form onSubmit={addInvoice} />
			</div>
			<div className="z-20" ref={listRef}>
				<List invoices={invoices} />
			</div>
			<div className="z-10">
				<Footer />
			</div>
		</>
	);
}

export default Home;
