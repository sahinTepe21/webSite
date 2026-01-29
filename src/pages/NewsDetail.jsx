import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { news } from '../data/mockData';
import { Button } from '../components/ui/button';

const NewsDetail = () => {
  const { slug } = useParams();
  const newsItem = news.find(n => n.slug === slug);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-normal">
            Haber bulunamadı
          </h2>
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
          className={`w-full h-full object-cover ${
            newsItem.id === 4 ? 'object-[75%_85%]' : 'object-cover'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/haberler"
          className="inline-flex items-center text-gray-600 mb-6 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Haberlere Dön
        </Link>

        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 font-normal">
          {newsItem.title}
        </h1>

        <div className="prose prose-lg max-w-none">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 font-normal">
                  {newsItem.excerpt}
                </p>

                {(newsItem.info1 ||
                  newsItem.info2 ||
                  newsItem.info3 ||
                  newsItem.info4) && (
                  <>
                    {newsItem.info1 && (
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {newsItem.info1}
                      </p>
                    )}

                    {newsItem.info2 && (
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {newsItem.info2}
                      </p>
                    )}

                    {newsItem.info3 && (
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {newsItem.info3}
                      </p>
                    )}

                    {newsItem.info4 && (
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {newsItem.info4}
                      </p>
                    )}
                  </>
                )}

                {(newsItem.feature1 ||
                  newsItem.feature2 ||
                  newsItem.feature3 ||
                  newsItem.feature4 ||
                  newsItem.feature5 ||
                  newsItem.feature6 ||
                  newsItem.feature7 ||
                  newsItem.feature8) && (
                  <>
                    <h3 className="text-2xl text-gray-900 mb-4 mt-12 font-normal">
                      Proje Detayları
                    </h3>

                    <ul className="space-y-3 text-gray-600">
                      {newsItem.feature1 && (
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                          <span>{newsItem.feature1}</span>
                        </li>
                      )}

                      {newsItem.feature2 && (
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                          <span>{newsItem.feature2}</span>
                        </li>
                      )}

                      {newsItem.feature3 && (
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                          <span>{newsItem.feature3}</span>
                        </li>
                      )}

                      {newsItem.feature4 && (
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                          <span>{newsItem.feature4}</span>
                        </li>
                      )}

                      {newsItem.feature5 && (
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                          <span>{newsItem.feature5}</span>
                        </li>
                      )}

                      {newsItem.feature6 && (
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                          <span>{newsItem.feature6}</span>
                        </li>
                      )}

                      {newsItem.feature7 && (
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                          <span>{newsItem.feature7}</span>
                        </li>
                      )}

                      {newsItem.feature8 && (
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                          <span>{newsItem.feature8}</span>
                        </li>
                      )}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
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
