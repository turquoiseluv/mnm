import { IconChevronDown } from "@tabler/icons-react";
import { Anchor, Burger, Center, Container, Group, Menu, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "../css/HeaderMenu.module.css";

const links = [
	{ link: "/about", label: "Features" },
	{
		link: "#1",
		label: "Learn",
		links: [
			{ link: "/docs", label: "Documentation" },
			{ link: "/resources", label: "Resources" },
			{ link: "/community", label: "Community" },
			{ link: "/blog", label: "Blog" },
		],
	},
	{ link: "/about", label: "About" },
	{ link: "/pricing", label: "Pricing" },
	{
		link: "#2",
		label: "Support",
		links: [
			{ link: "/faq", label: "FAQ" },
			{ link: "/demo", label: "Book a demo" },
			{ link: "/forums", label: "Forums" },
		],
	},
];

export function HeaderMenu() {
	const [opened, { toggle }] = useDisclosure(false);

	const items = links.map((link) => {
		const menuItems = link.links?.map((item) => <Menu.Item key={item.link}>{item.label}</Menu.Item>);

		if (menuItems) {
			return (
				<Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
					<Menu.Target>
						<a href={link.link} className={classes.link} onClick={(event) => event.preventDefault()}>
							<Center>
								<span className={classes.linkLabel}>{link.label}</span>
								<IconChevronDown size={14} stroke={1.5} />
							</Center>
						</a>
					</Menu.Target>
					<Menu.Dropdown>{menuItems}</Menu.Dropdown>
				</Menu>
			);
		}

		return (
			<a key={link.label} href={link.link} className={classes.link} onClick={(event) => event.preventDefault()}>
				{link.label}
			</a>
		);
	});

	return (
		<header className={classes.header}>
			<Container size="xl">
				<div className={classes.inner}>
					<div>
						<Anchor className="absolute w-[70px] h-[30px] top-[0.8rem] z-10" href="/"></Anchor>
						<div className="font-bold font-Yeongdo relative text-[2rem] bottom-[-0.5rem] select-none">Mute</div>
					</div>
					<Group gap={5} visibleFrom="sm">
						{items}
					</Group>
					<Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
				</div>
			</Container>
		</header>
	);
}
