"use client";

import { parseVttFile } from "@/utils/parseVtt";
import { Button } from "@mantine/core";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Vtt() {
	const [vttIdx, setVttIdx] = useState(0);
	const [productsData, setProductsData] = useState<VTTCue[]>([]);
	const [showProductOptions, setShowProductOptions] = useState(false);

	// useEffect(() => {
	// 	async function fetchData() {
	// 		const res = await fetch("https://dummyjson.com/products");
	// 		const data = await res.json();
	// 		setProductsData(data.products);
	// 	}

	// 	fetchData();
	// }, []);

	useEffect(() => {
		const fetchVtt = async () => {
			try {
				const response = await fetch("sample/sample.vtt");
				const text = await response.text();
				const parsedCaptions = parseVttFile(text);
				
				setProductsData(parsedCaptions);
			} catch (error) {
				console.error("Error fetching VTT file:", error);
			}
		};

		fetchVtt();
	}, []);

	// useEffect(() => {
	// 	const dummy = "你好 欢迎来到秘境的赌场城堡";

	// 	async function fetchData() {
	// 		const result = await fetch("https://api-free.deepl.com/v2/translate", {
	// 			method: "POST",
	// 			headers: {
	//                 "Authorization": "DeepL-Auth-Key 6a3bd9d9-430c-47bb-b1b6-1a34d529b848:fx",
	//                 "Content-Type": "application/json",
	//             },
	// 			body: JSON.stringify({ text: ["Hello, world!"], target_lang: "DE" }),
	// 		});

	// 		console.log(result);
	// 	}

	// 	fetchData();
	// }, []);

	return (
		<div>
			<div className="relative z-10">
				<Button size="sm" onClick={() => setVttIdx(vttIdx - 1)}>
					Prev
				</Button>
				{vttIdx}
				<Button size="sm" onClick={() => setVttIdx(vttIdx + 1)}>
					Next
				</Button>
			</div>

			<div className="justify-center items-center bg-black text-white flex h-[20rem]">
				{productsData.map((data: VTTCue, idx:number) => {
					idx++;
					return (
						<motion.div
							key={idx}
							className={`flex absolute p-10`}
							initial={{ fontSize: "1.5em", opacity: 0, userSelect: "none" }}
							animate={{
								color: Math.abs(vttIdx - idx) > 0 ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)",
								textShadow: Math.abs(vttIdx - idx) === 1 ? "0 0 8px white" : "0 0 -1px white",
								opacity: vttIdx - idx === 0 ? 1 : Math.abs(vttIdx - idx) === 1 ? 0.5 : 0,
								transition: { duration: 0.2 },
								y: vttIdx < idx ? "1em" : vttIdx > idx ? "-1em" : "0",
								z: vttIdx - idx === 0 ? 10 : 1,
								scaleX: vttIdx - idx === 0 ? 1 : Math.abs(vttIdx - idx) === 1 ? 0.8 : 0,
								scaleY: vttIdx - idx === 0 ? 1 : Math.abs(vttIdx - idx) === 1 ? 0.6 : 0,
							}}
						>
							<div>{data.text}</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
