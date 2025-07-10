import { useState } from 'react';
import { BsPencilSquare } from "react-icons/bs";
import Input from './Input';

export default function EditItem({ title, value, onChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <Input
                        title={title}
                        placeholder={value}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <BsPencilSquare onClick={handleEditClick} />
                    <button className='text-purple-900' onClick={onChange}>Salvar</button>
                </div>
            ) :
                <div>
                    <p>{value}Email</p>
                    <BsPencilSquare onClick={handleEditClick}/>
                    
                </div>
            }
        </div>
    )
}