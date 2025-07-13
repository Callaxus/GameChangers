export default function Input({title, placeholder,name, id, type = "text", value, onChange, showTitle = true}) {
    return (
        <div className="flex-1">
            
            <input 
                className="bg-purple-100 border-2 border-purple-900 rounded-xl w-full px-2 py-2 focus:outline-none focus:border-purple-700" 
                placeholder={placeholder} 
                type={type} 
                value={value} 
                onChange={onChange}
                name={name}
                id={id}
            />
        </div>
    )
}