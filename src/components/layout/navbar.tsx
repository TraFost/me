import { Link } from "wouter";

import { ShinyText } from "~/components/ui/shiny-text";

import { NAV_LINKS } from "~/constants/app.constant";

export function Navbar() {
	return (
		<header className="absolute top-0 left-0 right-0 z-11 p-6">
			<div className="flex justify-between items-center">
				<h1 className="hover:opacity-60 transition-opacity text-md font-medium tracking-tight">
					<Link href="/">
						<ShinyText
							text="Rahman Nurudin"
							speed={3}
							delay={0}
							color="#000000"
							shineColor="#ffffff"
							spread={120}
							yoyo
						/>
					</Link>
				</h1>

				<nav className="flex gap-8">
					{NAV_LINKS.map((link) => (
						<NavLink key={link.name} href={link.href}>
							{link.name}
						</NavLink>
					))}
				</nav>
			</div>
		</header>
	);
}

function NavLink({ href, children }: { href: string; children: string }) {
	return (
		<Link
			href={href}
			className="text-black hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
		>
			{children}
		</Link>
	);
}
