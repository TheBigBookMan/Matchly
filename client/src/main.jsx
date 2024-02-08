import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <UserProvider>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </UserProvider>
);
