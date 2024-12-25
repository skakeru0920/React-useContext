import { useState } from "react";
import Parent from "./Parent";

function App() {
	const [state, setState] = useState("一番上の階層のstateです");

	return (
		<>
			{state}
			<Parent state={state} />
		</>
	);
}

export default App;
