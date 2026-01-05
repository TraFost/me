import { Instagram, Github, Linkedin } from "lucide-react";
import type { JSX } from "preact/jsx-runtime";

interface Social {
	name: string;
	url: string;
	icon: JSX.Element;
}

export const SOCIAL_LINKS: Social[] = [
	{
		name: "instagram",
		url: "https://www.instagram.com/rahmannrdn/",
		icon: (
			<Instagram
				size={16}
				strokeWidth={1.5}
				className="group-hover:scale-110 transition-transform"
			/>
		),
	},
	{
		name: "linkedin",
		url: "https://www.linkedin.com/in/rahmannrdn/",
		icon: (
			<Linkedin
				size={16}
				strokeWidth={1.5}
				className="group-hover:scale-110 transition-transform"
			/>
		),
	},
	{
		name: "github",
		url: "https://www.github.com/TraFost",
		icon: (
			<Github
				size={16}
				strokeWidth={1.5}
				className="group-hover:scale-110 transition-transform"
			/>
		),
	},
];
