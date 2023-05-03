import HomePage from "./components/HomePage";
import SignIn from "./components/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<SignIn />} />
				<Route path="/home" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
