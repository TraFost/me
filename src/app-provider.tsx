import { Route, Router } from "wouter";
import { ReactLenis } from "lenis/react";

import { HomePage } from "~/pages/home.page";

import { Navbar } from "~/components/layout/navbar";
import { Footer } from "~/components/layout/footer";

const DEFAULT_LENIS_OPTIONS = {
	lerp: 0.1,
	smoothWheel: true,
	smoothTouch: false,
};

export function AppProvider() {
	return (
		<>
			<Routes />
		</>
	);
}

function Routes() {
	return (
		<Router>
			<LenisWrapper>
				<MainLayout>
					<Route path="/" component={HomePage} />
				</MainLayout>
			</LenisWrapper>
		</Router>
	);
}

function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="text-neutral-900 selection:bg-neutral-900 selection:text-background overflow-x-hidden antialiased min-h-screen">
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}

function LenisWrapper({ children }: { children: React.ReactNode }) {
	return (
		<ReactLenis options={DEFAULT_LENIS_OPTIONS} root>
			{children}
		</ReactLenis>
	);
}
