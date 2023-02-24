import { Banner } from "./Banner";
import { NavBar } from "./NavBar";

type Props = {
	isMenuOpen: boolean;
	isSearchOpen: boolean;
	toggleMenu: () => void;
	toggleSearch: () => void;
};

export const PageHeader: React.FunctionComponent<Props> = ({
	isMenuOpen,
	isSearchOpen,
	toggleMenu,
	toggleSearch,
}) => {
	return (
		<header className="header">
			<Banner />
			<NavBar {...{ isMenuOpen, toggleMenu, isSearchOpen, toggleSearch }} />
		</header>
	);
};
