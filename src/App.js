import HomePage from "./components/HomePage";
import SignIn from "./components/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<SignIn />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
