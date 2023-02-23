import { useState } from "react";

import { Banner } from "./Banner";
import { NavBar } from "./NavBar";
import { NavMenu } from "./NavMenu";

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
