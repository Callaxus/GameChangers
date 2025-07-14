import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';

export default function CategoryPage() {
    const { categorySlug } = useParams(); // Get categorySlug from the URL
    const location = useLocation(); // Get any passed state (optional)
    const navigate = useNavigate();
    const [filteredItems, setFilteredItems] = useState([]);

    // Get categoryName from state or fallback to slug-based title
   const categoryName = categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const allItems = [
        {
            id: 1,
            name: "Magic Card Example",
            category: "magic-the-gathering", // Must match the slug format
            price: 25.99,
            image: "/path/to/image.jpg"
        },
        {
            id: 2,
            name: "Pokemon Card Example",
            category: "cartas-pokemon",
            price: 15.99,
            image: "/path/to/image.jpg"
        },
        {
            id: 3,
            name: "PS4 Game Example",
            category: "playstation-4",
            price: 45.99,
            image: "/path/to/image.jpg"
        },
        // Add more items as needed
    ];

    useEffect(() => {
        const filtered = allItems.filter(item => item.category === categorySlug);
        setFilteredItems(filtered);
    }, [categorySlug]);

    return (
        <div>
            <div className='bg-orange-400 align-center text-purple-800 p-2 flex items-center justify-between' style={{ height: '15vh' }}>
                <IoReturnUpBackOutline 
                    size={30} 
                    className="cursor-pointer"
                    onClick={() => navigate('/categorias')}  // Back to categories page
                />
                
                <h1 className="font-bowlby pl-5 text-right text-4xl text-purple-900">
                    {categoryName} {/* Display category name */}
                </h1>
            </div>

            <div className="p-4">
                <div className="mb-4">
                    <p className="text-lg text-purple-800">
                        {filteredItems.length} items encontrados
                    </p>
                </div>

                {filteredItems.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-600">Nenhum item encontrado nesta categoria.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map(item => (
                            <div key={item.id} className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                                <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                                    {item.name}
                                </h3>
                                <p className="text-xl font-bold text-orange-600">
                                    €{item.price}
                                </p>
                                <button className="mt-4 w-full bg-purple-800 text-white py-2 rounded-md hover:bg-purple-700 transition-colors">
                                    Ver Detalhes
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
