"use client";

import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { motion } from "motion/react";

export default function MyCard({ playerOn, togglePlayer }) {
	return (
		<motion.div
			style={{ width: "fit-content", position: "absolute", right: 0, bottom: 0, margin: "10px", height: playerOn ? "fit-content" : 0, overflow: "hidden" }}
			animate={{
				height: playerOn ? "fit-content" : 0,
				transition: { duration: 0.2, ease: "easeInOut" },
			}}
			transition={{ duration: 0.2, ease: "easeInOut" }}
		>
			<Card shadow="sm" padding="lg" radius="md" withBorder maw={400}>
				<Card.Section>
					<Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png" height={160} alt="Norway" />
				</Card.Section>

				<Group justify="space-between" mt="md" mb="xs">
					<Text fw={500}>Norway Fjord Adventures</Text>
					<Badge color="pink">On Sale</Badge>
				</Group>

				<Text size="sm" c="dimmed">
					With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway
				</Text>

				<Button color="blue" fullWidth mt="md" radius="md" onClick={togglePlayer}>
					Book classic tour now
				</Button>
			</Card>
		</motion.div>
	);
}
