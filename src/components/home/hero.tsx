import { ArrowDown } from "lucide-react";
import { GrainGradient } from "@paper-design/shaders-react";

export function Hero() {
	return (
		<section
			id="hero"
			className="flex flex-col justify-end w-full px-6 pb-12 md:px-12 md:pb-16 relative overflow-hidden border-b border-neutral-200 min-h-dvh"
		>
			<GradientBackground />
			<HeroDescription />
		</section>
	);
}

function GradientBackground() {
	return (
		<div className="absolute inset-0 -z-10">
			<GrainGradient
				style={{ height: "100%", width: "100%" }}
				colorBack="#fcfbf9"
				softness={0.76}
				intensity={0.45}
				noise={0}
				shape="corners"
				offsetX={0}
				offsetY={0}
				scale={1}
				rotation={0}
				speed={1}
				colors={["#f7f5f2", "#4b5563", "#fcfbf9", "#f7f5f2"]}
			/>
		</div>
	);
}

function HeroDescription() {
	return (
		<div className="w-full mx-auto relative z-10 pointer-events-none">
			<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
				<div className="md:col-span-4 reveal-up flex flex-col justify-end h-full pointer-events-auto">
					<p className="text-xs md:text-sm font-light leading-relaxed text-neutral-500 lowercase max-w-xs tracking-wide">
						full-stack engineer based in indonesia. building agentic systems and
						real-time products that hold under load.
					</p>
					<div className="mt-8 md:mt-12 flex gap-4">
						<a
							href="#"
							className="group flex items-center gap-2 text-xs font-normal uppercase tracking-widest border-b border-neutral-300 pb-1 transition-colors hover:border-neutral-900 hover:text-neutral-900 text-neutral-500"
						>
							<span>View Recent Projects</span>
							<ArrowDown
								size={14}
								strokeWidth={1.5}
								className="group-hover:translate-y-0.5 transition-transform duration-300"
							/>
						</a>
					</div>
				</div>

				<div className="md:col-span-8 text-right reveal-up delay-100 mt-12 md:mt-0 pointer-events-auto">
					<h2 className="text-6xl md:text-8xl lg:text-9xl leading-[0.85] font-medium text-neutral-900 tracking-tighter">
						Software Architect
						<br />
						<span className="text-neutral-300 block text-2xl md:text-4xl lg:text-5xl mt-4 tracking-tight font-normal">
							Agentic Infrastructure
						</span>
					</h2>
				</div>
			</div>
		</div>
	);
}
