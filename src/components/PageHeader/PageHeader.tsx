import { useState } from "react";

import { NavMenu } from "src/components/NavMenu";

import { Banner } from "./Banner";
import { NavBar } from "./NavBar";

export const PageHeader: React.FunctionComponent = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<header>
			<Banner />
			<NavBar {...{ isMenuOpen, toggleMenu }} />
			<NavMenu {...{ isMenuOpen }} />
		</header>
	);
};
