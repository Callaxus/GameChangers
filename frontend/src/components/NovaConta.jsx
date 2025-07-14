import { useState } from 'react';
import { IoReturnUpBackOutline } from "react-icons/io5";
import Input from './Input';
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

            <div id='body' className="text-purple-900 flex flex-col items-center h-screen leading-relaxed">
                <h2 className='font-bowlby text-4xl mt-5 mb-5'>CRIAR NOVA CONTA</h2>
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

                <button
                    className='mt-16 font-bowlby border-2 border-purple-900 bg-purple-900 text-white rounded-lg px-20 py-2 m-2 w-72 hover:bg-white hover:text-purple-900 transition-colors'
                    onClick={handleNovaConta}
                >
                    CRIAR CONTA
                </button>
            </div>

            {/* Modal de Termos e Condições */}
            {showTerms && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-lg w-full text-left shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 text-purple-900">Termos e Condições</h2>
                        <p className="text-gray-700 max-h-80 overflow-y-auto">
                            Bem-vindo ao GameChangers! Ao criar uma conta, você concorda em respeitar nossos termos de uso.
                            Não será permitido conteúdo ofensivo, ilegal ou fraudulento. Seus dados são protegidos de acordo
                            com nossa política de privacidade. Reservamo-nos o direito de suspender contas que violem as regras.
                            Ao continuar, você declara que leu e compreendeu esses termos.
                        </p>
                        <div className="flex justify-end mt-4">
                            <button
                                className="text-white bg-purple-900 px-4 py-2 rounded hover:bg-purple-700"
                                onClick={() => setShowTerms(false)}
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}