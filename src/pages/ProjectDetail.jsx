import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Home, Calendar, ArrowLeft } from 'lucide-react';
import { allProjects } from '../data/mockData';
import { Button } from '../components/ui/button';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Proje bulunamadı</h2>
          <Link to="/projeler">
            <Button>Projelere Dön</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[500px]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link to="/projeler" className="inline-flex items-center text-white mb-4 hover:text-gray-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Projelere Dön
            </Link>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
              {project.name}
            </h1>
            <div className="flex items-center text-white/90 text-lg">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Proje Hakkında</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.name}, modern mimarisi ve özenle seçilmiş detaylarıyla {project.location} bölgesinde öne çıkan premium bir yaşam alanıdır. 
                Projemiz, günlük yaşamınızı kolaylaştıran sosyal tesisleri ve geniş yeşil alanlarıyla konforlu bir yaşam sunmaktadır.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Stratejik konumu sayesinde ulaşım ağına kolay erişim sağlarken, modern şehir yaşamının tüm avantajlarından faydalanabilirsiniz. 
                Proje, kaliteli malzeme kullanımı ve detaylı işçiliği ile uzun yıllar boyunca değerini koruyacak şekilde tasarlanmıştır.
              </p>

              <h3 className="text-2xl font-light text-gray-900 mb-4 mt-12">Öne Çıkan Özellikler</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span>Modern ve şık mimari tasarım</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span>Geniş sosyal tesis alanları</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span>24 saat güvenlik hizmeti</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span>Yeşil alanlar ve peyzaj düzenleme</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span>Kapalı otopark</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span>Yüzme havuzu ve fitness merkezi</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-28">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Proje Bilgileri</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Lokasyon</p>
                    <p className="text-gray-900 font-medium">{project.location}</p>
                  </div>
                </div>

                {project.units && (
                  <div className="flex items-start">
                    <Home className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Daire Tipleri</p>
                      <p className="text-gray-900 font-medium">{project.units}</p>
                    </div>
                  </div>
                )}

                {project.deliveryDate && (
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Teslim Tarihi</p>
                      <p className="text-gray-900 font-medium">{project.deliveryDate}</p>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-200">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <Button className="w-full bg-gray-900 hover:bg-gray-800">
                  Bilgi Al
                </Button>
                <Button variant="outline" className="w-full">
                  Randevu Al
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Size yardımcı olmak için buradayız</p>
                <a href="tel:4449633" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                  444 9 633
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
