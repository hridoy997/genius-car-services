import React, { useEffect } from 'react';
import google from '../../../images/Social/google.png';
import facebook from '../../../images/Social/Facebook.png';
import github from '../../../images/Social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import UseToken from '../../../Hooks/UseToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token] = UseToken(user || user1);
    
    let errorElement;

    useEffect(() => {
        if (token) {
            // navigate('/home');
            navigate(from, { replace: true });
        }
    }, [user, user1, navigate]);

    if (loading || loading1) {
        return <Loading />;
    }

    

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>;
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="Google Logo" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="Facebook Logo" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={github} alt="Github Logo" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;












// import React from 'react';
// import google from '../../../images/Social/google.png';
// import facebook from '../../../images/Social/Facebook.png';
// import github from '../../../images/Social/github.png';
// import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init';
// import { useNavigate } from 'react-router-dom';
// import Loading from '../../Shared/Loading/Loading';

// const SocialLogin = () => {
//     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
//     const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
//     const navigate = useNavigate();
    
//     let errorElement;

//     if(loading || loading1){
//         return <Loading></Loading>
//     }

//     if (error || error1) {
//         errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
//     }

//     if (user || user1) {
//         navigate('/home');
//     }

//     return (
//         <div>
//             <div className='d-flex align-items-center'>
//                 <div style={{ height: '1px' }} className='bg-primary w-50'></div>
//                 <p className='mt-2 px-2'>or</p>
//                 <div style={{ height: '1px' }} className='bg-primary w-50'></div>
//             </div>
//             {errorElement}
//             <div className=''>
//                 <button
//                     onClick={() => signInWithGoogle()}
//                     className='btn btn-info w-50 d-block mx-auto my-2'>
//                     <img style={{ width: '30px' }} src={google} alt="" />
//                     <span className='px-2'>Google Sign In</span>
//                 </button>
//                 <button className='btn btn-info w-50 d-block mx-auto my-2'>
//                     <img style={{ width: '30px' }} src={facebook} alt="" />
//                     <span className='px-2'>Facebook Sign In</span>
//                 </button>
//                 <button
//                     onClick={() => signInWithGithub()}
//                     className='btn btn-info w-50 d-block mx-auto'>
//                     <img style={{ width: '30px' }} src={github} alt="" />
//                     <span className='px-2'>Github Sign In</span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default SocialLogin;





