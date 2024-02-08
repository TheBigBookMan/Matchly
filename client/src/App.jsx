import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Conversation from "./pages/Conversation";
import EditProfile from "./pages/EditProfile";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Stats from "./pages/Stats";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";
import NavigationBar from "./components/common/NavigationBar/NavigationBar";
import SettingsProvider from "./contexts/SettingsContext";

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useContext(UserContext);
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    return <ProtectedLayout>{children}</ProtectedLayout>;
};

const ProtectedLayout = ({ children }) => {
    return (
        <SettingsProvider>
            <div className="flex flex-col justify-between w-full h-full">
                <main>{children}</main>
                <NavigationBar />
            </div>
        </SettingsProvider>
    );
};

function App() {
    return (
        <div className="h-screen w-screen font-poppins bg-slate-900">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/chats"
                    element={
                        <ProtectedRoute>
                            <Messages />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/conversation"
                    element={
                        <ProtectedRoute>
                            <Conversation />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/edit-profile"
                    element={
                        <ProtectedRoute>
                            <EditProfile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <ProtectedRoute>
                            <Settings />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/stats"
                    element={
                        <ProtectedRoute>
                            <Stats />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
