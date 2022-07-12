const mdSettings: any = {
	h1: ({ node, ...props }: any) => (
		<h1
			style={{
				fontWeight: "bold",
				fontSize: "25px",
				marginBottom: "15px",
				marginTop: "30px",
			}}
			{...props}
		/>
	),
	h2: ({ node, ...props }: any) => (
		<h2
			style={{
				fontWeight: "bold",
				fontSize: "20px",
				marginBottom: "15px",
				marginTop: "30px",
			}}
			{...props}
		/>
	),

	p: ({ node, ...props }: any) => (
		<p
			style={{
				marginBottom: "15px",
			}}
			{...props}
		/>
	),
	code: ({ node, ...props }: any) => (
		<code
			style={{
				marginTop: "35px",
			}}
			{...props}
		/>
	),
};

export default mdSettings;
