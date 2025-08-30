import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewPatientData from "./pages/ViewPatientData";

function App() {
    const [account, setAccount] = useState(null);
    const [provider, setProvider] = useState(null);

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/patient-data/:walletAddress" element={<ViewPatientData />} />
    </Routes>
  </div>
)

export default App;
