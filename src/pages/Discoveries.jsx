import React from 'react';
import { Layers } from 'lucide-react';

const Discoveries = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
              Dem Keşifleri
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Yaşam alanlarınızı dönüştüren yenilikçi çözümler
            </p>
          </div>
        </div>
      </div>

      {/* Foldhome Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg"
                alt="Foldhome"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-6">
                <Layers className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">YENİ KEŞİF</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">
                24 ODALI 1+1 EV : FOLDHOME
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Bir Dem keşi Foldhome sistemiyle, evinizde olmasını hayal
                  ettiğiniz ama evinize sığdıramayacağınız PlayStation odası,
                  özel sinema, müzik stüdyosu, fitness salonu gibi binlerce
                  metrekareye yayılan onlarca alan istediğiniz zaman evinize
                  ekleniyor.
                </p>
                <p>
                  Foldhome ünitelerine rezervasyon yaptırarak bu alanları sadece
                  size özel bir oda gibi kullanabiliyorsunuz, isterseniz
                  misafirlerinizi de ağırlayabiliyorsunuz. Üstelik "kullan-öde"
                  sistemi sayesinde tüm bu alanları kullanmadığınız zaman hiçbir
                  ücret ödem iyorsunuz.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Özellikler
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">
                      24 farklı ortak kullanım alanı
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">
                      Kullandığınız kadar ödeyin
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">
                      Online rezervasyon sistemi
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">
                      Premium kalitede donanım
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Discoveries */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
            Daha Fazla Keşif
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Akıllı Ev Sistemleri
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Evinizi akıllı teknolojilerle donattık. Aydınlatma, ısıtma,
                güvenlik ve daha fazlasını parmak ucunuzdan kontrol edin.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Yeşil Enerji
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sürdürülebilir yaşam için projelerimizde yeşil enerji çözümleri
                kullanıyoruz. Doğaya saygılı, ekonomik ve modern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discoveries;
