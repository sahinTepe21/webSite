import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { news } from '../data/mockData';
import { Button } from '../components/ui/button';

const NewsDetail = () => {
  const { slug } = useParams();
  const newsItem = news.find((n) => n.slug === slug);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haber bulunamadı</h2>
          <Link to="/haberler">
            <Button>Haberlere Dön</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[400px]">
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/haberler" className="inline-flex items-center text-gray-600 mb-6 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Haberlere Dön
        </Link>

        <div className="flex items-center text-gray-500 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{newsItem.date}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
          {newsItem.title}
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {newsItem.excerpt}
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2 className="text-2xl font-light text-gray-900 mb-4 mt-12">Proje Detayları</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link to="/haberler">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tüm Haberlere Dön
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
