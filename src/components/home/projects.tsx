import { InfiniteGallery } from "~/components/ui/infinite-gallery";

const sampleImages = [
	{ src: "/1.jpg", alt: "Image 1" },
	{ src: "/2.jpg", alt: "Image 2" },
];

export function Projects() {
	return (
		<section className="min-h-dvh relative">
			<h5 className="font-serif text-3xl md:text-6xl tracking-tight text-center">
				<span className="italic">I ship</span> therefore I am
			</h5>

			<InfiniteGallery
				images={sampleImages}
				speed={1.2}
				zSpacing={3}
				visibleCount={12}
				falloff={{ near: 0.8, far: 14 }}
				className="h-dvh w-full rounded-lg overflow-hidden"
			/>
			<div className="text-center font-mono uppercase text-sm font-semibold absolute bottom-0 left-1/2 -translate-x-1/2 mb-4">
				<p>Use arrow keys or touch to navigate</p>
			</div>
		</section>
	);
}
