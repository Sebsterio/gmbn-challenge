import type { AppProps } from "next/app";

import "src/styles/globals.css";
import "src/styles/main-original.css";

import { PageHeader } from "src/components/PageHeader";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<PageHeader />
			<Component {...pageProps} />;
		</>
	);
}
