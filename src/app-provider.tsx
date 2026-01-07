import { Route, Router } from "wouter";

import { HomePage } from "~/pages/home.page";

import { Navbar } from "~/components/layout/navbar";
import { Footer } from "~/components/layout/footer";

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

function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="text-neutral-900 selection:bg-neutral-900 selection:text-background overflow-x-hidden antialiased">
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}
