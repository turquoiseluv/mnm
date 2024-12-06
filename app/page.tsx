"use client";

import { useState } from "react";
import MyCard from "./components/MyCard";
import { Button } from "@mantine/core";

export default function Home() {
	const [playerOn, setPlayerOn] = useState(true);
	const togglePlayer = () => setPlayerOn(!playerOn);

	return (
		<div>
			<Button onClick={togglePlayer}>Toggle Player</Button>
			<MyCard playerOn={playerOn} togglePlayer={togglePlayer} />
		</div>
	);
}
