export default function Category(props){
    return (
        <div className="inline-block">
            <button className="p-2 flex flex-col items-center">
                <img src={props.imgSrc}
                alt = {props.title}
                className="w-20 h-20 object-cover rounded-full"></img>
                <p className="w-20 text-center text-s break-words mt-2 whitespace-normal">{props.title}</p>
            </button>
        </div>
    )
}