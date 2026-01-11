import { InfiniteGallery } from "~/components/ui/infinite-gallery";

const sampleImages = [
	{ src: "/1.jpg", alt: "Image 1" },
	{ src: "/2.jpg", alt: "Image 2" },
];

export function Projects() {
	return (
		<section className="mt-3 min-h-dvh">
			<div className="space-y-3">
				<h5 className="font-serif text-3xl md:text-6xl tracking-tight text-center">
					Recent Projects
				</h5>
				<p className="text-center font-mono uppercase text-sm font-semibold tracking-widest text-neutral-500">
					Use arrow keys or touch to navigate
				</p>
			</div>

			<InfiniteGallery
				images={sampleImages}
				speed={1.2}
				zSpacing={3}
				visibleCount={12}
				falloff={{ near: 0.8, far: 14 }}
			/>
		</section>
	);
}
