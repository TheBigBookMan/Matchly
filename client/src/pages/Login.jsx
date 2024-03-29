import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
    const { user, login, signUpUser } = useContext(UserContext);
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const [signIn, setSignIn] = useState({
        email: "",
        password: "",
    });
    const [signUp, setSignUp] = useState({
        email: "",
        password: "",
    });

    const handleSigninChange = (e) => {
        setSignIn({
            ...signIn,
            [e.target.name]: e.target.value,
        });
    };

    const submitSignIn = () => {
        login(signIn);
    };

    const handleSignupChange = (e) => {
        setSignUp({
            ...signUp,
            [e.target.name]: e.target.value,
        });
    };

    const submitSignUp = () => {
        signUpUser();
    };

    return (
        <div className="flex flex-col gap-20 h-full w-full justify-center items-center">
            <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-red-500">Matchly</p>
                <p className="text-slate-300">You know you love it 💞</p>
            </div>
            {!isSignIn && !isSignUp ? (
                <div className="flex flex-col gap-4">
                    <button
                        onClick={() => setIsSignIn(true)}
                        className="bg-red-500 text-white rounded-2xl w-[160px] h-[40px]"
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => setIsSignUp(true)}
                        className="bg-blue-500 text-white rounded-2xl w-[160px] h-[40px]"
                    >
                        Sign Up
                    </button>
                </div>
            ) : (
                <div
                    onClick={() => {
                        setIsSignIn(false);
                        setIsSignUp(false);
                    }}
                    className="flex flex-start"
                >
                    <button className="w-[60px] h-[40px] rounded-lg bg-red-500 text-white text-lg text-center">
                        Back
                    </button>
                </div>
            )}

            {isSignIn && (
                <div className="flex flex-col gap-8 items-center">
                    <input
                        onChange={handleSigninChange}
                        type="text"
                        className="pl-2 w-[220px] h-[40px] border border-red-500 rounded-xl"
                        value={signIn.email}
                        name={"email"}
                        placeholder="Email..."
                    />
                    <input
                        onChange={handleSigninChange}
                        type="text"
                        className="pl-2 w-[220px] h-[40px] border border-red-500 rounded-xl"
                        value={signIn.password}
                        name={"password"}
                        placeholder="Password..."
                    />
                    <button
                        onClick={submitSignIn}
                        className="bg-red-500 text-white rounded-2xl w-[160px] h-[40px]"
                    >
                        Submit
                    </button>
                </div>
            )}

            {isSignUp && (
                <div className="flex flex-col gap-8 items-center">
                    <input
                        onChange={handleSignupChange}
                        type="text"
                        className="pl-2 w-[220px] h-[40px] border border-red-500 rounded-xl"
                        value={signUp.email}
                        name={"email"}
                        placeholder="Email..."
                    />
                    <input
                        onChange={handleSignupChange}
                        type="text"
                        className="pl-2 w-[220px] h-[40px] border border-red-500 rounded-xl"
                        value={signUp.password}
                        name={"password"}
                        placeholder="Password..."
                    />
                    <button
                        onClick={submitSignUp}
                        className="bg-blue-500 text-white rounded-2xl w-[160px] h-[40px]"
                    >
                        Signup
                    </button>
                </div>
            )}
        </div>
    );
};

export default Login;
