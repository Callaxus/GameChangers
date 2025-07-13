import { useNavigate } from 'react-router-dom';
import { IoReturnUpBackOutline } from "react-icons/io5";
import React, { useState } from "react";


export default function CriarAnuncio(props){
const navigate = useNavigate();

const [selectedFile, setSelectedFile] = useState(null);
const [preview, setPreview] = useState(null);
const [selectedCategory, setSelectedCategory] = useState('');
const [isCategoryOpen, setIsCategoryOpen] = useState(false);

const categorias = [
    { id: 1, title: 'Magic: The Gathering',},
    { id: 2, title: 'Cartas Pokemon',},
    { id: 3, title: 'Cartas Yu-gi-oh',},
    { id: 4, title: 'Ps5',},
    { id: 5, title: 'Ps4',},
    { id: 6, title: 'PS3',},
    { id: 7, title: 'Ps2',},
    { id: 8, title: 'PsP',},
    { id: 9, title: 'Ps Vita',},
    { id: 10, title: 'Nintendo Switch',},
    { id: 11, title: 'Nintendo Switch 2',},
    { id: 12, title: 'Nintendo DS',},
    { id: 13, title: 'Nintendo 3DS',},
    { id: 14, title: 'Xbox One',},
    { id: 15, title: 'Xbox 360',},
    { id: 16, title: 'Xbos Series X',},
    { id: 17, title: 'Xbos Series OS',},
    { id: 18, title: 'Peluches',},
    { id: 19, title: 'Figuras',}
];


     const handleFileChange = (event) => {
     const file = event.target.files[0];
     setSelectedFile(file);
     // Mostra preview da imagem enviada
     if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
     }
  }; 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Por favor adicione uma foto antes de submeter!");
      return;
    }

    // Simulação de submissão do form

    const formData = new FormData();
    formData.append("foto", selectedFile);
    console.log("Foto pronta para guardar", selectedFile);
    console.log("Preview:", preview);
    alert("Foto guardada com sucesso!");
  };
    return(
            <div>
                <div id='seta' className='bg-orange-100 align-center text-purple-800 p-2 flex items-center justify-between' style={{ height: '15vh' }} onClick={() => navigate('/explore') }>
                         <IoReturnUpBackOutline size={30}/>
                         <h1 className="font-bowlby pl-5 text-right text-4xl text-purple-900">Cria um novo anúncio</h1>
                </div>   
                        <div className="bg-stone-200 text-center">
                            <div id="form">
                                <form onSubmit={handleSubmit}>
                                    <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange} 
                                    className="hidden"
                                    id="photo-upload"
                                    />
                      
                                {preview && (
                                    <img 
                                        src={preview} 
                                        alt="Preview" 
                                        className="mt-10 w-full "/>
                            )}

                        <div className="flex gap-4 justify-center m-5 p-5">
                            <label
                            htmlFor="photo-upload"
                            className="bg-purple-800 hover:bg-purple-900/20 border-2 border-purple-800 text-white px-6 py-4 rounded-xl cursor-pointer inline-flex items-center gap-3 transition-colors font-bowlby">
                            Adicionar Foto
                            </label>

                            <button
                            type="submit"
                            className="bg-purple-800/10 hover:bg-purple-800/20 border-2 border-purple-800 text-purple-800 px-6 py-4 rounded-xl cursor-pointer inline-flex items-center gap-3 transition-colors font-bowlby">
                            Confirmar
                            </button>
                        </div>
                    </form>
                    
                </div>
            </div>
            <div className="flex flex-col">
                <label
                for="title"
                className="text-purple-900 text-xl ms-5 mb-1">
                    Título do Anúncio
                </label>
                <input 
                id="title"
                type="text"
                className="mb-4 bg-purple-100 border-2 border-purple-900
                 rounded-xl mx-5 px-2 py-2"
                placeholder="Escreve aqui o título do teu anúncio">
                </input>

                 <label for="description"
                className="text-purple-900 text-xl ms-5 mb-1">
                    Descrição do Anúncio
                </label>
                <textarea id="description"
                className="mb-4 bg-purple-100 border-2 border-purple-900
                 rounded-xl mx-5 px-2 py-2"
                placeholder="Escreve aqui o título do teu anúncio">
                </textarea>

                {/*Categorias*/}


                <div className="mb-4">
                    <label className="block text-purple-800 text-xl mb-2 mx-5">Categoria:</label>
                        <select 
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="p-3 border-2 border-purple-800 rounded-lg bg-purple-800/10 mx-5 focus:border-purple-500"
                        >
                    <option 
                    value=""
                    >Selecione uma categoria...
                    </option>
                    {categorias.map(cat => (
                    <option key={cat.id} value={cat.title}>{cat.title}</option>
                ))}
                        </select>
                </div>

                <div
                className="ms-5 text-2xl flex flex-col text-purple-800 space-y-4">
                    <div
                    className="flex items-center space-x-3">
                        <label
                            for="vendendo">
                            Colocar para venda?
                        </label>
                        <input id="vendendo" type="checkbox"
                            className="w-6 h-6 text-orange-400 bg-white border-2 border-gray-300 rounded focus:ring-orange-400 focus:ring-2 accent-orange-400">
                        </input>        
                        </div>
                        <div
                        className="flex items-center space-x-5">
                        <label
                            for="troca">
                            Colocar para troca?
                        </label>
                        <input id="troca" type="checkbox"
                            className="w-6 h-6 text-orange-400 bg-white border-2 border-gray-300 rounded focus:ring-orange-400 focus:ring-2 accent-orange-400">
                        </input>
                    </div>  
                </div>
                <div
                className="flex justify-center">
                    <button
                    className="bg-orange-400 hover:bg-orange-900/50 border-2 border-orange-800 text-white px-6 py-4 rounded-xl transition-colors font-bowlby w-80 m-5">
                        Postar Anúncio
                    </button>
                </div>
                </div>
                


                
                {/* Debug info to visualize state */}

                <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f0f0f0" }}>
                    <h3>Debug Info:</h3>
                    <p>Selected File: {selectedFile ? selectedFile.name : "null"}</p>
                    <p>Preview: {preview ? "Image loaded" : "null"}</p>
                </div>
            </div>
 
    )
}