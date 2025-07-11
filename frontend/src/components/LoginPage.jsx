import { useState } from 'react';
import { IoReturnUpBackOutline } from "react-icons/io5";
import Input from './Input';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const res = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            alert(data.message);
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <>
            <div id='seta' className='bg-orange-400 p-2 flex items-center justify-between' style={{ height: '15vh' }}>
                <button className='text-purple-900 text-4xl' onClick={() => navigate('/') }><IoReturnUpBackOutline /> </button>
                <p className='text-purple-900 text-3xl font-bowlby'>GameChangers</p>
            </div>
            <div id='body' className=" text-purple-900 flex flex-col items-center bg-orange-200 h-screen leading-relaxed">
                <h2 className="font-bowlby text-4xl mt-24 mb-12">Entrar na Conta</h2>
                <Input title={"Email"} type={"email"} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input title={"Senha"} type={"password"} placeholder={"senha"} value={password} onChange={(e) => setPassword(e.target.value)}/>
                
                <p className='flex p-2 underline hover:decoration-orange-400'>Esqueceu sua senha?</p>
                <label><input className='accent-orange-400 p-2' type="checkbox"  /> Guardar palavra-passe</label>
                <button className="mt-16 font-bowlby border-2 border-purple-900 bg-purple-900 text-white rounded-lg px-20 py-2 m-2 w-72 hover:bg-white hover:text-purple-900 transition-colors" onClick={handleLogin}>ENTRAR</button>
            </div>
        </>
    );}