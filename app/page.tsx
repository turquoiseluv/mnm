"use client";

import { useState } from "react";
import MyCard from "./components/MyCard";
import { Button, Container } from "@mantine/core";
import { HeaderMenu } from "./components/HeaderMenu";
import { FooterSocial } from "./components/FooterSocial";
import VttPlayer from "./components/VttPlayer";

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
				<Button onClick={togglePlayer}>Toggle Player</Button>
				<VttPlayer vttUrl={"./sample/sample.vtt"} /> 
			</Container>
			<FooterSocial />
		</div>
	);
}
