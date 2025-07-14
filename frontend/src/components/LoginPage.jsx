import { useState } from 'react';
import { IoReturnUpBackOutline } from "react-icons/io5";
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import PixelCard from './PixelCard';
import { login } from '../services/api'; // Import login from api.js

export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const { data } = await login({ email, password }); //  Call backend login API
            localStorage.setItem('token', data.token); //  Save JWT token

            alert('Login successful!');
            navigate('/dashboard'); //  Redirect to dashboard or home
        } catch (err) {
            console.error('Login failed:', err.response?.data?.msg || err.message);
            alert(err.response?.data?.msg || 'Login failed');
        }
    };

    return (
        <>
            <div id='seta' className='bg-orange-400 p-2 flex items-center justify-between' style={{ height: '15vh' }}>
                <button className='text-purple-900 text-4xl' onClick={() => navigate('/')}>
                    <IoReturnUpBackOutline />
                </button>
                <p className='text-purple-900 text-3xl font-bowlby'>GameChangers</p>
            </div>
            <PixelCard variant="purple" className="fixed inset-0">
                <div id='body' className="text-purple-900 flex flex-col items-center h-screen leading-relaxed">
                    <h2 className="font-bowlby text-4xl mt-5 mb-5">
                        Entrar na Conta
                    </h2>

                    <Input
                        title={"Email"}
                        type={"email"}
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        title={"Senha"}
                        type={"password"}
                        placeholder={"********"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <p className='flex p-2 underline hover:decoration-orange-400'>
                        Esqueceu sua senha?
                    </p>

                    <label htmlFor="savePass">
                        Guardar palavra-passe
                        <input
                            id="savePass"
                            className='p-2 m-2 flex-1 items-center'
                            type="checkbox"
                        />
                    </label>

                    <button
                        className="mt-5 font-bowlby border-2 border-purple-900 bg-purple-900
                        text-white rounded-lg px-20 py-2 m-2 w-72 hover:bg-white
                        hover:text-purple-900 transition-colors"
                        onClick={handleLogin}
                    >
                        ENTRAR
                    </button>
                </div>
            </PixelCard>
        </>
    );
}
