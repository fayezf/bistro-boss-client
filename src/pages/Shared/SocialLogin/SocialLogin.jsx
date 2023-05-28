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
            <div className='flex items-center ml-20 mb-2 gap-2'>
                <p onClick={handleGoogle} className="btn btn-circle btn-outline"><FaGoogle></FaGoogle></p>
                <div className='border border-gray-600 p-2 rounded'>
                    <span className='text-primary'>Google sign in</span>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;