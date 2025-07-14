import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categorias from '../components/TodasCategorias.jsx';
import CategoryPage from '../components/CategoriaFiltro.jsx';
import ExploreComponent from '../components/ExplorePage.jsx';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/explore" element={<ExploreComponent />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path='/category/${categorySlug}' element={<CategoryPage />} />
            {/* Add more routes here */}
        </Routes>
    );
}

export default AppRoutes;