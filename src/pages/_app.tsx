import type { AppProps } from "next/app";
import { useState } from "react";

import "src/styles/main-original.css"; // fallback styles for legacy elements
import styles from "src/styles/app.module.scss";

import { Banner } from "src/components/Banner";
import { NavBar } from "src/components/NavBar";
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
			<div className={styles.page}>
				<header
					className="header" /* temp workaround to preserve original styles */
				>
					<Banner />
					<NavBar {...{ isMenuOpen, isSearchOpen, toggleMenu, toggleSearch }} />
				</header>

				<div className={styles.mainWrapper}>
					<main className={styles.main}>
						<Component {...pageProps} />{" "}
					</main>

					<nav className={styles.nav}>
						{isSearchOpen && <SearchBar />}
						{isMenuOpen && <NavMenu />}
					</nav>
				</div>
			</div>
		</div>
	);
}
