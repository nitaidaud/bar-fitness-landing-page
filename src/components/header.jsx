import { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-black text-white p-4 fixed w-full z-50 backdrop-blur-xl bg-opacity-50 animate__animated animate__fadeInDown">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="w-1/12 max-w-10">
                    <img src="Images/logo.png" width={100} />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-grow justify-center gap-20 text-xl">
                    <a href="#about" className="nav-link">אודות</a>
                    <a href="#services" className="nav-link">שירותים</a>
                    <a href="#trainers" className="nav-link">ממליצים</a>
                    <a href="#contact" className="nav-link">צור קשר</a>
                </nav>

                {/* Hamburger Icon */}
                <div className={`md:hidden z-50`} onClick={toggleMenu}>
                    <div className={`w-8 h-0.5 bg-white my-1 transition-transform duration-300 ${menuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-8 h-0.5 bg-white my-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-8 h-0.5 bg-white my-1 transition-transform duration-300 ${menuOpen ? 'transform -rotate-45 -translate-y-[4px]' : ''}`}></div>
                </div>

                {/* Mobile Menu */}
                <nav className={`fixed md:hidden h-screen top-0 left-0 w-full bg-black text-white flex flex-col items-center justify-center gap-10 text-xl transition-transform duration-500 z-40 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <a href="#about" onClick={toggleMenu} className="nav-link">אודות</a>
                    <a href="#services" onClick={toggleMenu} className="nav-link">שירותים</a>
                    <a href="#trainers" onClick={toggleMenu} className="nav-link">ממליצים</a>
                    <a href="#contact" onClick={toggleMenu} className="nav-link">צור קשר</a>
                </nav>
            </div>
        </header>
    )
}
