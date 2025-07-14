import axios from '../api';
import { useState } from 'react';
import { IoReturnUpBackOutline } from "react-icons/io5";
import Input from './Input';
import PixelCard from './PixelCard';
import { useNavigate } from 'react-router-dom';

export default function NovaConta() {
    const [form, setForm] = useState({ username: '', email: '', password: '', confirm: '', phone: '', terms: false });
    const [showTerms, setShowTerms] = useState(false); // controlar modal
    const navigate = useNavigate();

    const handleNovaConta = async () => {
        if (form.password !== form.confirm) {
            alert('Senhas não coincidem');
            return;
        }
        if (!form.terms) {
            alert('Você precisa aceitar os termos para criar a conta.');
            return;
        }

        try {
            const res = await axios.post('http://localhost:8082/api/auth/register', {
                username: form.username,
                email: form.email,
                password: form.password,
                phone: form.phone
            }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });

            if (res.status === 200 || res.status === 201) {
                alert('Cadastro realizado com sucesso! Redirecionando para login...');
                navigate('/loginpage'); // ✅ Redirect
            } else {
                alert(`Erro: ${res.data.msg || 'Não foi possível criar a conta.'}`);
            }
        } catch (err) {
            console.error('Erro ao criar conta:', err);
            alert(err.response?.data?.msg || 'Erro no servidor. Tente novamente.');
        }
    };


    return (
        <>
            <div id='seta' className='bg-orange-400 p-2 flex items-center justify-between' style={{ height: '15vh' }}>
                <button className='text-purple-900 text-4xl' onClick={() => navigate('/')}><IoReturnUpBackOutline /> </button>
                <p className='text-purple-900 text-3xl font-bowlby'>GameChangers</p>
            </div>
            <PixelCard variant="purple" className="fixed inset-0">
                <div id='body' className="text-purple-900 mt-16 flex flex-col items-center h-screen leading-relaxed">
                    <h2 className='font-bowlby text-4xl p-8 '>CRIAR NOVA CONTA</h2>
                    <Input title={"Nome"} placeholder="Nome de Usuário" onChange={(e) => setForm({ ...form, username: e.target.value })} />
                    <Input title={"Email"} placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    <Input title={"Senha"} type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
                    <Input title={"Confirmação de Senha"} type="password" placeholder="Confirme sua senha" onChange={(e) => setForm({ ...form, confirm: e.target.value })} />
                    <Input title={"Número de telefone"} placeholder="Nº de telefone" onChange={(e) => setForm({ ...form, phone: e.target.value })} />

                    <label className="text-center px-5 mt-3">
                        <input
                            className="accent-orange-400 mr-2"
                            type="checkbox"
                            checked={form.terms}
                            onChange={(e) => setForm({ ...form, terms: e.target.checked })}
                        />
                        Eu li e aceito os{' '}
                        <span
                            className="underline text-orange-500 cursor-pointer hover:text-orange-800"
                            onClick={() => setShowTerms(true)}
                        >
                            Termos e Condições
                        </span>.
                    </label>
                    <button className='mt-16 font-bowlby border-2 border-purple-900 bg-purple-900 text-white rounded-lg px-20 py-2 m-2 w-72 hover:bg-white hover:text-purple-900 transition-colors' onClick={handleNovaConta}>CRIAR CONTA</button>
                </div>
            </PixelCard>
        </>
    );
};
