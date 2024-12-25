import { useState, useContext, createContext } from "react";
import Parent from "./Parent";

export const MyContext = createContext(null);

function App() {
	const [state, setState] = useState("一番上の階層のstateです");

	return (
		<MyContext.Provider value={state}>
			{state}
			<Parent />
		</MyContext.Provider>
	);
}

export default App;
