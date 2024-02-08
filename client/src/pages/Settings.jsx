import { SettingsContext } from "../contexts/SettingsContext";
import { useContext } from "react";

const Settings = () => {
    const { distance, adjustDistance, ageRange, adjustAgeRange } =
        useContext(SettingsContext);

    return (
        <div>
            <p>Settings</p>
        </div>
    );
};

export default Settings;
