import type { AppProps } from "next/app";
import { useState } from "react";

// fallback styles for legacy elements
import "src/styles/main-original.css";

import { PageHeader } from "src/components/PageHeader";
import { NavMenu } from "src/components/NavMenu";
import { SearchBar } from "src/components/SearchBar";

export default function App({ Component, pageProps }: AppProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<div id="container">
			<div
				style={{
					height: "100vh",
					display: "flex",
					flexFlow: "column",
					flexWrap: "nowrap",
				}}
			>
				<PageHeader {...{ isMenuOpen, toggleMenu }} />

				<div
					style={{
						flex: 1,
						overflowY: "auto",
					}}
				>
					<SearchBar />
					<NavMenu {...{ isMenuOpen }} />
					<Component {...pageProps} />;
				</div>
			</div>
		</div>
	);
}
