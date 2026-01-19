import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-light mb-4">dem</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sağlam projeler, dürüst işçilik, sürdürülebilir yapılar.
              <br />
              Biz işimizi geçici değil, kalıcı yaparız.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/hakkimizda"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Biz Kimiz
                </Link>
              </li>
              <li>
                <Link
                  to="/projeler"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Projeler
                </Link>
              </li>
              <li>
                <Link
                  to="/haberler"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Haberler ve Duyurular
                </Link>
              </li>
              <li>
                <Link
                  to="/iletisim"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-medium mb-4">Projeler</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/projeler?category=konut"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Konut Projeleri
                </Link>
              </li>
              <li>
                <Link
                  to="/projeler?category=arsa"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Arsa Projeleri
                </Link>
              </li>
              <li>
                <Link
                  to="/projeler?category=villa"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Villa Projeleri
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Telefon: +90 (501) 648 08 21</li>
              <li>Email: demsahintepe@gmail.com</li>
              <li className="pt-4">
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/kvkk"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                KVKK
              </Link>
              <Link
                to="/cerez-politikasi"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Çerez Politikası
              </Link>
              <Link
                to="/gizlilik"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Gizlilik Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
