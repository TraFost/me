import React, { useRef } from "react";
import {
	motion,
	useScroll,
	useTransform,
	type UseScrollOptions,
} from "motion/react";

type Props = {
	children: React.ReactNode;
	range?: [string, string];
	offset?: UseScrollOptions["offset"];
	className?: string;
};

// A container that applies a vertical parallax effect to its children based on scroll position.
// just adjust the range and offset props to customize the effect. since we're only using y transform.

export function ParallaxContainer({
	children,
	range = ["0vh", "-30vh"],
	offset = ["start start", "end start"],
	className = "",
}: Props) {
	const ref = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset,
	});

	const y = useTransform(scrollYProgress, [0, 1], range);

	return (
		<motion.section ref={ref} style={{ y }} className={className}>
			{children}
		</motion.section>
	);
}
