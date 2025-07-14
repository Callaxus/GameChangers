import React, { useState } from 'react';
import EditItem from './EditItem';

export default function ProfileEdit() {
    const [email, setEmail] = useState("email@email.com");
    const [telefone, setTelefone] = useState("receber do backend");
    const [regiao, setRegiao] = useState("receber do backend");
    const [senha, setSenha] = useState("********");

    return (
        <div
            id='perfiledit'
            className="w-full text-purple-900 flex flex-col items-start bg-orange-100 leading-relaxed space-y-4 p-4"
        >
            <div className="flex items-center justify-between w-full px-4">
                <p className="font-semibold min-w-fit mr-4">Email:</p>
                <div className="flex-1">
                    <EditItem 
                        title="Email"
                        value={email}
                        onChange={setEmail}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between w-full px-4">
                <p className="font-semibold min-w-fit mr-4">Telefone:</p>
                <div className="flex-1">
                    <EditItem 
                        title="Telefone"
                        value={telefone}
                        onChange={setTelefone}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between w-full px-4">
                <p className="font-semibold min-w-fit mr-4">Região:</p>
                <div className="flex-1">
                    <EditItem 
                        title="Região"
                        value={regiao}
                        onChange={setRegiao}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between w-full px-4">
                <p className="font-semibold min-w-fit mr-4">Senha:</p>
                <div className="flex-1">
                    <EditItem 
                        title="Senha"
                        value={senha}
                        onChange={setSenha}
                    />
                </div>
            </div>
        </div>
    );
}