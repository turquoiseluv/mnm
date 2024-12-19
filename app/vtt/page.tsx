"use client";

import { Button } from "@mantine/core";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type dataType = {
	id: number;
	title: string;
};

export default function Vtt() {
	const [vttIdx, setVttIdx] = useState(0);
	const [productsData, setProductsData] = useState([]);
	const [showProductOptions, setShowProductOptions] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("https://dummyjson.com/products");
			const data = await res.json();
			setProductsData(data.products);
		}

		fetchData();
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
				{productsData.map((data: dataType) => {
					return (
						<motion.div
							key={data.id}
							className={`flex absolute`}
							initial={{ fontSize: "1.5rem", opacity: 0 }}
							animate={{
								color: Math.abs(vttIdx - data.id) > 0 ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)",
								textShadow: Math.abs(vttIdx - data.id) === 1 ? "0 0 5px white" : "0 0 -1px white",
								opacity: vttIdx - data.id <= 1 ? 1 : 0,
								transition: { duration: 0.2 },
								y: vttIdx < data.id ? "3rem" : vttIdx > data.id ? "-3rem" : "0",
								scaleX: vttIdx - data.id === 0 ? 1.5 : Math.abs(vttIdx - data.id) === 1 ? 1 : 0,
								scaleY: vttIdx - data.id === 0 ? 1.5 : Math.abs(vttIdx - data.id) === 1 ? 1 : 0,
							}}
						>
							<div>{data.title}</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
