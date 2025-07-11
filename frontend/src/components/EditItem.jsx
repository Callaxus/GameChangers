import { useState } from 'react';
import { BsPencilSquare } from "react-icons/bs";
import Input from './Input';
import { FaRegCheckCircle } from "react-icons/fa";

export default function EditItem({ title, value, onChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const handleEditClick = () => {setIsEditing(!isEditing);

    };

    let handleInputChange = (e) => {setInputValue(e.target.value);};

    return (
        <div className='leading-loose flex items-center justify-around p-2'>
            {isEditing ? (
                <div className='flex items-center justify-around'>
                    <Input
                        title={title}
                        placeholder={value}
                        value={value}
                        onChange={handleInputChange}
                    />
                    <BsPencilSquare onClick={handleEditClick} className='m-2'/>
                    <button className='text-purple-900 ' onClick={handleEditClick}><FaRegCheckCircle /></button>
                </div>
            ) :
                <div>
                    <p>{value}</p>
                    <BsPencilSquare onClick={handleEditClick}/>
                    
                </div>
            }
        </div>
    )
}

// Exemplo de componente pai usando EditItem
function ParentComponent() {
    const [valor, setValor] = useState('');

    return (
        <EditItem
            title="Título"
            value={valor}
            onChange={setValor} // <-- Passe uma função aqui!
        />
    );
}