import type { AppProps } from "next/app";

// fallback styles for legacy elements
import "src/styles/main-original.css";

import { PageHeader } from "src/components/PageHeader";
import { SearchBar } from "src/components/SearchBar";

export default function App({ Component, pageProps }: AppProps) {
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
				<PageHeader />

				<div style={{ flex: 1, overflowY: "auto" }}>
					<SearchBar />
					<Component {...pageProps} />;
				</div>
			</div>
		</div>
	);
}
