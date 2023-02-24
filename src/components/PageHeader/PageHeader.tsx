import { Banner } from "./Banner";
import { NavBar } from "./NavBar";

type Props = {
	isMenuOpen: boolean;
	toggleMenu: () => void;
	toggleSearch: () => void;
};

export const PageHeader: React.FunctionComponent<Props> = ({
	isMenuOpen,
	toggleMenu,
	toggleSearch,
}) => {
	return (
		<header className="header">
			<Banner />
			<NavBar {...{ isMenuOpen, toggleMenu, toggleSearch }} />
		</header>
	);
};
