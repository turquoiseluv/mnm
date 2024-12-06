import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { DraculaTheme } from "dracula-mantine";

export const metadata: Metadata = {
	title: "My Mantine app",
	description: "I have followed setup instructions carefully",
};

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<ColorSchemeScript defaultColorScheme="dark" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<MantineProvider defaultColorScheme="dark" theme={DraculaTheme}>
					{children}
				</MantineProvider>
			</body>
		</html>
	);
}
