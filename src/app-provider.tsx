import { Route, Router } from "wouter-preact";

import { HomePage } from "~/pages/home.page";

import { Navbar } from "~/components/home/navbar";
import { Footer } from "~/components/home/footer";

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
			<MainLayout>
				<Route path="/" component={HomePage} />
			</MainLayout>
		</Router>
	);
}

function MainLayout({ children }: { children: preact.ComponentChildren }) {
	return (
		<main className="text-neutral-900 selection:bg-neutral-900 selection:text-background overflow-x-hidden antialiased">
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}
