import Child from "./Child";
function Parent({ state }) {
	return (
		<div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
			<h1>Parent</h1>
			<Child state={state} />
		</div>
	);
}

export default Parent;
