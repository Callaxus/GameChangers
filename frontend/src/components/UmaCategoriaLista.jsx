

export default function listaCat(props){
    return (
        <button 
            className="bg-purple-800/10 mt-2 mb-2 p-4 rounded-xl ms-5 w-full 
            text-left hover:bg-purple-800-20 transition-colors duration-200"
            onClick={props.onClick}>

                <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="col-span-2 flex flex-col justify-center h-full ">
                         <h1 className="font-bowlby text-2xl text-purple-800 mb-2 ">{props.title}</h1>
                    </div>
              <div className="flex justify-center items-center h-full">
               <img
               alt="Produto"
               src={props.imgSrc}
               className="w-20 h-20 object-cover rounded-lg border-2 border-purple-800"
               />
              </div>
          </div>
        </button>
    )
}

