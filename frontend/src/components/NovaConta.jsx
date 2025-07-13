import { useState } from 'react';
import { IoReturnUpBackOutline } from "react-icons/io5";
import Input from './Input';
import { useNavigate } from 'react-router-dom';

export default function NovaConta() {
    const [form, setForm] = useState({ username: '', email: '', password: '', confirm: '', phone: '', terms: false });
    const navigate = useNavigate();
    const handleNovaConta = async () => {
        if (form.password !== form.confirm) {
            alert('Senhas não coincidem');
            return;
        }
        if (!form.terms) {
            alert('Você precisa aceitar os termos');
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: form.username,
                    email: form.email,
                    password: form.password,
                    phone: form.phone
                })
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
                <button className='text-purple-900 text-4xl' onClick={() => navigate('/')}><IoReturnUpBackOutline /> </button>
                
                <p className='text-purple-900 text-3xl font-bowlby'>GameChangers</p>
            </div>
                <div id='body' className=" text-purple-900 flex flex-col items-center bg-orange-200 h-screen leading-relaxed">
                <h2 className='font-bowlby text-4xl mt-24 mb-12'> CRIAR NOVA CONTA</h2>
                <Input title={"Nome"} placeholder="Nome de Usuário" onChange={(e) => setForm({ ...form, username: e.target.value })} />
                <Input title={"Email"} placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <Input title={"Senha"} type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
                <Input title={"Confirmação de Senha"} type="password" placeholder="Confirme sua senha" onChange={(e) => setForm({ ...form, confirm: e.target.value })} />
                <Input title={"Número de telefone"} placeholder="Nº de telefone" onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <label>
                    <input className='accent-orange-400' type="checkbox" onChange={(e) => setForm({ ...form, terms: e.target.checked })} /> Eu li e aceito os Termos e Condições.
                </label>
                <button className='mt-16 font-bowlby border-2 border-purple-900 bg-purple-900 text-white rounded-lg px-20 py-2 m-2 w-72 hover:bg-white hover:text-purple-900 transition-colors' onClick={handleNovaConta}>CRIAR CONTA</button>
            </div >
        </>
);
}
