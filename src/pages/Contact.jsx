import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Search } from 'lucide-react';
import { offices, cities } from '../data/mockData';
import { Button } from '../components/ui/button';

const Contact = () => {
  const [selectedCity, setSelectedCity] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOffices = offices.filter(office => {
    const matchesCity = selectedCity === 'Tümü' || office.city === selectedCity;
    const matchesSearch =
      office.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      office.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Satış Ofisleri
          </h1>
          <p className="text-lg text-gray-600">
            Size en yakın satış ofisimizi bulun ve bizi ziyaret edin.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* City Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Şehir Seçin
              </label>
              <select
                value={selectedCity}
                onChange={e => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                {cities.map(city => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ara
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Ofis veya adres arayın..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offices List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <p className="text-gray-600">{filteredOffices.length} ofis bulundu</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffices.map(office => (
            <div
              key={office.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-2">
                  {office.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {office.name}
                </h3>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-gray-400" />
                  <span>{office.address}</span>
                </div>

                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 flex-shrink-0 text-gray-400" />
                  <div>
                    <div>{office.workDays}</div>
                    <div>{office.workHours}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-gray-400" />
                  <a
                    href={`tel:${office.phone.replace(/\s/g, '')}`}
                    className="hover:text-blue-600"
                  >
                    {office.phone}
                  </a>
                </div>

                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0 text-gray-400" />
                  <a
                    href={`mailto:${office.email}`}
                    className="hover:text-blue-600 break-all"
                  >
                    {office.email}
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href={office.mapLoc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button variant="outline" className="w-full">
                    Yol Tarifi Al
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredOffices.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">
              Aradığınız kriterlere uygun ofis bulunamadı.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
