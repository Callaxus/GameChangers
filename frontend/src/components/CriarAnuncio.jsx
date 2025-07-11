import { useNavigate } from 'react-router-dom';
import { IoReturnUpBackOutline } from "react-icons/io5";
import React, { useState } from "react";


export default function CriarAnuncio(props){
const navigate = useNavigate();

const [selectedFile, setSelectedFile] = useState(null);
const [preview, setPreview] = useState(null);


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
          <div className="bg-stone-200">
                <div id="form">
                    <h2 className="text-2xl font-semibold text-stone-950 text-center p-5">Adiciona Uma Foto</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange} 
                            className=""
                        />
                        {preview && (
                            <img 
                                src={preview} 
                                alt="Preview" 
                                style={{ width: "200px", marginTop: "10px" }} 
                            />
                        )}
                        
                    <button
                        type="submit"
                        style={{ marginTop: "10px" }}
                        className="bg-stone-300 p-3 rounded-lg">
                        Adicionar
                    </button>
                </form>
                </div>

                
                {/* Debug info to visualize state */}

                <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f0f0f0" }}>
                    <h3>Debug Info:</h3>
                    <p>Selected File: {selectedFile ? selectedFile.name : "null"}</p>
                    <p>Preview: {preview ? "Image loaded" : "null"}</p>
                </div>
            </div>
     </div>
    )
}