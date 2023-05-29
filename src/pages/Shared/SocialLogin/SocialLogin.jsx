import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='flex justify-center items-center border border-gray-600rounded p-1 mb-2 gap-2'>
                <p onClick={handleGoogle} className="btn btn-circle btn-outline text-cyan-700"><FaGoogle></FaGoogle></p>
                <div>
                    <span className='text-green-900 font-bold'>Google</span>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;