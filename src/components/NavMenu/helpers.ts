export const makeClassName = (...chunks: (string | false | undefined)[]) =>
	chunks.filter((x) => x).join(" ");
