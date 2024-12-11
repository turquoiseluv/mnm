"use client";

import { useState } from "react";
import MyCard from "./components/MyCard";
import { Button, Container } from "@mantine/core";
import { HeaderMenu } from "./components/HeaderMenu";
import { FooterSocial } from "./components/FooterSocial";

export default function Home() {
	const [playerOn, setPlayerOn] = useState(true);
	const togglePlayer = () => setPlayerOn(!playerOn);

	return (
		<div className="min-h-dvh">
			<HeaderMenu />
			<div>
				<MyCard playerOn={playerOn} togglePlayer={togglePlayer} />
			</div>
			<Container size="xl" className="py-10" style={{ minHeight: "calc(100vh - 56px - 99px)" }}>
				<p>This is a boilerplate app for Mute - ASMR Audio Web Player</p>
				<p>mute all plz!</p>
				<br />
				<Button onClick={togglePlayer}>Toggle Player</Button>
			</Container>
			<FooterSocial />
		</div>
	);
}
