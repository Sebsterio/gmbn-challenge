import { Banner } from "./Banner";
import { NavBar } from "./NavBar";
import { NavMenu } from "./NavMenu";

export const PageHeader: React.FunctionComponent = () => {
	return (
		<header>
			<Banner />
			<NavBar />
			<NavMenu />
		</header>
	);
};
