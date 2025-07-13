import { useState } from 'react';
import { BsPencilSquare } from "react-icons/bs";
import Input from './Input';
import { FaRegCheckCircle } from "react-icons/fa";

export default function EditItem({ title, value, onChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSave = () => {
        if (onChange) {
            onChange(inputValue); 
        }
        setIsEditing(false);
    };

    return (
        <div className='flex items-center justify-between w-full'>
            {isEditing ? (
                <div className='flex items-center justify-between w-full'>
                    <Input
                        title={title}
                        placeholder={value}
                        value={inputValue}
                        onChange={handleInputChange}
                    />

                    <button 
                        className='text-green-600 ml-2' 
                        onClick={handleSave}
                    >
                        <FaRegCheckCircle size={20} />
                    </button>

                </div>
            ) : (
                <div className='flex items-center justify-between w-full'>
                    <span className="flex-1">{value}</span>
                    <button 
                        className='text-purple-900 ml-2' 
                        onClick={handleEditClick}
                    >
                        <BsPencilSquare size={20} />
                    </button>
                </div>
            )}
        </div>
    );
}
