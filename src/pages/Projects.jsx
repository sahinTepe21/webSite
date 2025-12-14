import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { allProjects, cities, projectCategories } from '../data/mockData';
import { Button } from '../components/ui/button';

const Projects = () => {
  const [searchParams] = useSearchParams();
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [selectedCity, setSelectedCity] = useState('Tümü');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Get filters from URL
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1));
    }
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = allProjects;

    // Filter by category
    if (selectedCategory !== 'Tümü') {
      filtered = filtered.filter(
        (project) => project.category === selectedCategory.toLowerCase()
      );
    }

    // Filter by city
    if (selectedCity !== 'Tümü') {
      filtered = filtered.filter((project) =>
        project.location.includes(selectedCity)
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, selectedCity, searchQuery]);

  const resetFilters = () => {
    setSelectedCity('Tümü');
    setSelectedCategory('Tümü');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Projeler</h1>
          <p className="text-lg text-gray-600">
            Modern yaşam alanları ve arsa projelerimizi keşfedin.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                {projectCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* City Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Şehir
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Button */}
            <div className="flex items-end">
              <Button
                onClick={resetFilters}
                variant="outline"
                className="w-full"
              >
                Filtreleri Temizle
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredProjects.length} proje bulundu
          </p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">
              Aradığınız kriterlere uygun proje bulunamadı.
            </p>
            <Button onClick={resetFilters} className="mt-4">
              Filtreleri Temizle
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
