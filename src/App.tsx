// app styles
import '@/styles/App.scss'

// router
import { Routes, Route } from "react-router-dom";

// pages
import Home from '@/pages/Home';
import Activities from '@/pages/Activities';
import Coaches from '@/pages/Coaches';
import Contacts from '@/pages/Contacts';
import History from '@/pages/History';
import Practices from '@/pages/Practices';

// components
import { Footer } from '@/components/LayoutComponents/Footer';
import { Header } from '@/components/LayoutComponents/Header';


function App() {

    return (
        <div className="App">

            <Header />

            <Routes>
                <Route index element={<Home />} />
                <Route path='activities' element={<Activities />} />
                <Route path='coaches' element={<Coaches />} />
                <Route path='contacts' element={<Contacts />} />
                <Route path='histroy' element={<History />} />
                <Route path='practices' element={<Practices />} />
            </Routes>

            {/* <Footer /> */}

        </div>
    )
}

export default App
