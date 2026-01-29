import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Biz Kimiz', path: '/hakkimizda' },
    { name: 'Projeler', path: '/projeler' },
    { name: 'Haberler', path: '/haberler' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  const handleSearch = e => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/projeler?search=${searchQuery}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a className="flex items-center" href="/" data-discover="true">
              <img
                src="/images/demYazı.svg"
                alt="DEM Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />

              <span className="ml-2 text-lg md:text-xl font-semibold tracking-wide">
                DEM YAPI
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="
                    font-[Chalet]
                    text-sm
                    font-bold
                    capitalize
                    text-[#1d1d1b]
                    leading-[17px]
                    tracking-[0.02em]
                    outline-none
                    transition-colors
                    hover:text-gray-900
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search className="w-5 h-5 text-gray-700" />
              </button>

              <a
                href="tel:+905016480821"
                className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-gray-900"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+90 (501) 648 08 21</span>
              </a>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Proje veya lokasyon arayın..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  autoFocus
                />
                <Button type="submit" className="bg-gray-900 hover:bg-gray-800">
                  Ara
                </Button>
              </form>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-4 space-y-3">
              {menuItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
