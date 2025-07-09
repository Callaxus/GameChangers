export default function Input({title, placeholder, type, value, onChange}) {
    return (
        <div>
            <h2 className="text-purple-900 ">
                {title}
            </h2>
            <input className="mb-4 bg-purple-100 border-2 border-purple-900 rounded-xl w-72 px-2 py-2" placeholder={placeholder} type={type} value={value} onChange={onChange}/>
        </div>
    )
}