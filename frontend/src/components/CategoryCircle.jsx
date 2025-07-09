export default function Category(props){
    return (
        <div>
            <button className="p-2">
                <img src={props.imgSrc}
                alt = {props.title}
                className="display-in w-16 h-16 object-cover rounded-full "></img>
                <p className="w-16">{props.title}</p>
            </button>
        </div>
    )
}