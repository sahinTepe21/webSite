import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import ProjectCard from '../components/ProjectCard';
import { landProjects, residentialProjects, news } from '../data/mockData';
import { Button } from '../components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />
      {/* About Section */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 leading-relaxed">
              <span className="text-gray-900 font-normal">
                2006'dan Günümüze Meydan Okuyan Yapılar.
              </span>
              <br />
              Konut ve ticari projelerde güveni, mühendisliği ve değeri aynı
              temelde buluşturuyoruz.
            </h2>
            <Link to="/hakkimizda">
              <Button variant="outline" className="mt-8 group">
                Keşfet
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Residential Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 font-normal">
                Konut Projeleri
              </h2>
              <p className="text-lg text-gray-600">
                Modern yaşam alanları için tasarlanmış projelerimizi keşfedin.
              </p>
            </div>
            <Link to="/projeler?category=konut">
              <Button variant="outline" className="hidden md:flex">
                Tüm Konut Projeleri
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialProjects.slice(0, 3).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/projeler?category=konut">
              <Button variant="outline">
                Tüm Konut Projeleri
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Land Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 font-normal">
                  Depo Projeleri
                </h2>
              </div>
              <p className="text-lg text-gray-600">
                Birikiminizle Birlikte Hayallerinizi Büyütün.
              </p>
            </div>
            <Link to="/projeler?category=depo">
              <Button variant="outline" className="hidden md:flex">
                Tüm Depo Projeleri
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/projeler?category=depo">
              <Button variant="outline">
                Tüm Depo Projeleri
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 font-normal">
              Haberler ve Duyurular
            </h2>
            <Link to="/haberler">
              <Button variant="outline" className="hidden md:flex">
                Tüm Haberler
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.slice(0, 3).map(item => (
              <Link
                key={item.id}
                to={`/haberler/${item.slug}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/haberler">
              <Button variant="outline">
                Tüm Haberler
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
