import React from "react";
import googleLogo from "../../../images/Social/google.png";
import facebookLogo from "../../../images/Social/Facebook.png";
import githubLogo from "../../../images/Social/github-logo.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const navigate = useNavigate();
    let errorElement;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
        errorElement = (
            <div>
                <p className="text-danger">Error: {error.message}</p>
            </div>
        );
    }

    if (user) {
        navigate("/home");
    }

    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className="mt-2 px-2">or</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            {errorElement}
            <div className="">
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-info w-50 d-block mx-auto my-2"
                >
                    <img style={{ width: "30px" }} src={googleLogo} alt="" />
                    <span className="px-2">Google Sign in</span>
                </button>
                <button className="btn btn-info w-50 d-block mx-auto my-2">
                    <img style={{ width: "30px" }} src={facebookLogo} alt="" />
                    <span className="px-2">Facebook Sign in</span>
                </button>
                <button className="btn btn-info w-50 d-block mx-auto my-2">
                    <img style={{ width: "30px" }} src={githubLogo} alt="" />
                    <span className="px-2">Github Sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
