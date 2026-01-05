import { ArrowUpRight } from "lucide-react";

import { SOCIAL_LINKS } from "~/constants/social.constant";

const currentYear = new Date().getFullYear();

export function Footer() {
	return (
		<footer
			id="contact"
			class="py-24 px-6 md:px-12 bg-neutral-900 text-white/90 border-t border-neutral-800 relative z-30"
		>
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
					<div className="max-w-3xl">
						<h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter lowercase mb-8">
							I'm looking for new opportunities.
						</h3>
						<a
							href="mailto:rahwisdilfiqrak@gmail.com"
							className="inline-flex items-center gap-3 text-xl md:text-2xl font-normal transition-all lowercase border-b border-neutral-700 pb-1 text-neutral-400 hover:text-white hover:border-white hover:gap-4 group"
						>
							<span>Get in touch</span>
							<ArrowUpRight
								size={20}
								strokeWidth={1.5}
								className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300"
							/>
						</a>
					</div>
					<div className="flex flex-col items-start md:items-end gap-8 w-full md:w-auto">
						<div className="flex gap-4">
							{SOCIAL_LINKS.map((link) => (
								<a
									key={link.name}
									href={link.url}
									className="p-3 rounded-full border border-neutral-700 text-neutral-400 hover:bg-[#fcfbf9] hover:text-neutral-900 hover:border-[#fcfbf9] transition-all duration-300 group"
									aria-label={link.name}
									target="_blank"
									rel="noopener noreferrer"
								>
									{link.icon}
								</a>
							))}
						</div>

						<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
							(c) {currentYear} Rahman N.
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
