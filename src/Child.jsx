import { useContext } from "react";
import { MyContext } from "./App";

function Child() {
	const myContext = useContext(MyContext);
	return (
		<div style={{ backgroundColor: "#808080", padding: "20px" }}>
			<h2>Child</h2>
			<p>受け取ったstate: {myContext}</p>
		</div>
	);
}

export default Child;
