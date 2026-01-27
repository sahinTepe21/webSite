import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/projeler/${project.slug}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <span className="px-3 py-1 bg-white text-gray-900 text-xs font-medium rounded-full">
            {project.status}
          </span>
          {project.features &&
            project.features.map((feature, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full"
              >
                {feature}
              </span>
            ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.name}
        </h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{project.location}</span>
        </div>
        {project.units && (
          <div className="flex items-center text-gray-600">
            <Home className="w-4 h-4 mr-2" />
            <span className="text-sm">{project.units}</span>
          </div>
        )}
        {project.deliveryDate && (
          <div className="flex items-center text-gray-600">
            <Home className="w-4 h-4 mr-2" />
            <span className="text-sm">{project.deliveryDate}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;
