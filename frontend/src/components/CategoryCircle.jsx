import { useNavigate } from "react-router-dom";

export default function Category(props){
       const navigate = useNavigate();
    return (
        <div className="inline-block">
            <button className="p-2 flex flex-col items-center" onClick={() => navigate(props.link)}>
                <img src={props.imgSrc}
                alt = {props.title}
                className="w-20 h-20 object-cover rounded-full">
                </img>
                <p className="w-20 text-center text-s break-words mt-2 whitespace-normal font-semibold">{props.title}</p>
            </button>
        </div>
    )
}