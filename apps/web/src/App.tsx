import React from "react";
import { SignIn, Dashboard, Login } from "features";
// import { AuthWrapperHoc } from "components";
import { Routes, Route } from "react-router-dom";
import AuthWrapperHoc from "./ComponentsRequired/AuthWrapperHoc.tsx";
const App = () => {
	return (
		<AuthWrapperHoc>
			<Routes>
				{/* <Route path="/signin" element={<SignIn />} /> */}
				<Route path="/" element={<SignIn />} />
				<Route path="/dashboard/*" element={<Dashboard />} />

				{/* <Route path="/" element={<Home />} />
			<Route path="*" element={<Auth />} />
			<Route path="/fx-home/*" element={<FXHome />} />
			<Route path="/home" element={<Home />} />
			<Route path="/logout" element={<Logout />} />
			<Route path="privacy-policy" element={<PrivacyPolicy />} />
			<Route path="terms-and-conditions" element={<TermsAndCondition />} />
			<Route path="refund-policy" element={<RefundPolicy />} />
			<Route path="faq" element={<Faq />} /> */}
			</Routes>
		</AuthWrapperHoc>
	);
};

export default App;
