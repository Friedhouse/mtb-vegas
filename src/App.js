import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './src/pages/ContactPage';
import HomePage from './src/pages/HomePage';
import Header from './src/features/components/Header';
import Footer from './src/features/components/Footer';
import TrailsDirectoryPage from './src/pages/TrailsDirectoryPage';
import TrailDetailPage from './src/pages/TrailDetailPage';
import AboutPage from './src/pages/AboutPage';
import { fetchTrails } from './src/features/trails/TrailsSlice';
import { fetchPartners } from './src/features/partners/partnersSlice';
import { fetchPromotions } from './src/features/promotions/promotionsSlice';
import './App.css'

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTrails());
        dispatch(fetchPartners());
        dispatch(fetchPromotions());
    }, [dispatch]);

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='Directory' element={<TrailsDirectoryPage />} />
                <Route
                    path='trails/:trailId'
                    element={<TrailDetailPage />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
