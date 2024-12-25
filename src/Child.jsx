function Child({ state }) {
	return (
		<div style={{ backgroundColor: "#808080", padding: "20px" }}>
			<h2>Child</h2>
			<p>受け取ったstate: {state}</p>
		</div>
	);
}

export default Child;
