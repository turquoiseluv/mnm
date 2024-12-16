import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { DraculaTheme } from "dracula-mantine";

export const metadata: Metadata = {
	title: "My Mantine app",
	description: "I have followed setup instructions carefully",
};

const fontNotoSansKR = localFont({
	src: "./fonts/NotoSans-Regular.woff2",
	variable: "--font-noto-sans",
	display: 'swap',
});
const fontNotoSansMono = localFont({
	src: "./fonts/NotoSans-Regular.woff2",
	variable: "--font-noto-sans",
	display: 'swap',
});
const fontYeongdo = localFont({
	src: "./fonts/YeongdoOTF-Regular.woff2",
	variable: "--font-yeongdo",
	display: 'swap',
});

const theme = createTheme({
	// ...DraculaTheme,
	fontFamily: fontNotoSansKR.style.fontFamily,
	fontFamilyMonospace: fontNotoSansMono.style.fontFamily,
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<ColorSchemeScript defaultColorScheme="light" />
			</head>
			<body className={`${fontYeongdo.variable} antialiased`}>
				<MantineProvider defaultColorScheme="light" theme={theme}>
					{children}
				</MantineProvider>
			</body>
		</html>
	);
}
