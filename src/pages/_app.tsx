import type { AppProps } from "next/app";
import { useState } from "react";

// fallback styles for legacy elements
import "src/styles/main-original.css";

import { PageHeader } from "src/components/PageHeader";
import { NavMenu } from "src/components/NavMenu";
import { SearchBar } from "src/components/SearchBar";

export default function App({ Component, pageProps }: AppProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const toggleMenu = () => {
		setIsSearchOpen(false);
		setIsMenuOpen(!isMenuOpen);
	};
	const toggleSearch = () => {
		setIsMenuOpen(false);
		setIsSearchOpen(!isSearchOpen);
	};

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
				<PageHeader
					{...{ isMenuOpen, toggleMenu, isSearchOpen, toggleSearch }}
				/>

				<div
					style={{
						flex: 1,
						position: "relative",
					}}
				>
					<div
						style={{
							position: "absolute",
							top: 0,
							width: "100%",
							maxHeight: "100%",
							overflowY: "auto",
						}}
					>
						<Component {...pageProps} />;
					</div>

					<div
						style={{
							position: "absolute",
							zIndex: 200,
							top: 0,
							width: "100%",
							maxHeight: "100%",
							overflowY: "auto",
						}}
					>
						{isSearchOpen && <SearchBar />}
						{isMenuOpen && <NavMenu />}
					</div>
				</div>
			</div>
		</div>
	);
}
