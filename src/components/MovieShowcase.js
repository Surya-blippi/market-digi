// src/components/MovieShowcase.js
import { useState, useEffect } from 'react';

export default function MovieShowcase() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('movie-showcase');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const moviesRow1 = [
    {
      title: "The Shawshank Redemption",
      image: "/images/movies/shawshank.jpg",
      year: "1994"
    },
    {
      title: "The Dark Knight",
      image: "/images/movies/dark-knight.jpg",
      year: "2008"
    },
    {
      title: "Inception",
      image: "/images/movies/inception.jpg",
      year: "2010"
    },
    {
      title: "Pulp Fiction",
      image: "/images/movies/pulp-fiction.jpg",
      year: "1994"
    },
    {
      title: "The Matrix",
      image: "/images/movies/matrix.jpg",
      year: "1999"
    },
    {
      title: "Interstellar",
      image: "/images/movies/interstellar.jpg",
      year: "2014"
    }
  ];

  const moviesRow2 = [
    {
      title: "Avatar",
      image: "/images/movies/avatar.jpg",
      year: "2009"
    },
    {
      title: "The Avengers",
      image: "/images/movies/avengers.jpg",
      year: "2012"
    },
    {
      title: "Gladiator",
      image: "/images/movies/gladiator.jpg",
      year: "2000"
    },
    {
      title: "Jurassic Park",
      image: "/images/movies/jurassic-park.jpg",
      year: "1993"
    },
    {
      title: "Lord of the Rings",
      image: "/images/movies/lotr.jpg",
      year: "2001"
    },
    {
      title: "Star Wars",
      image: "/images/movies/star-wars.jpg",
      year: "1977"
    }
  ];

  const MovieCard = ({ movie }) => (
    <div className="flex-shrink-0 mx-4 group">
      <div className="relative w-48 h-72 overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105">
        {/* Image */}
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-semibold text-lg leading-tight mb-1">
            {movie.title}
          </h3>
          <p className="text-white/80 text-sm">
            {movie.year}
          </p>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 border-2 border-primary-orange/0 group-hover:border-primary-orange/50 rounded-lg transition-all duration-300"></div>
      </div>
    </div>
  );

  return (
    <section id="movie-showcase" className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-primary-orange font-medium text-sm uppercase tracking-wider">Featured Work</span>
          <h2 className="text-3xl font-bold text-white mt-2">
            Our Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow mx-auto mt-4"></div>
        </div>

        {/* First Row - Left to Right */}
        <div className="relative mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          
          <div className="overflow-hidden py-4">
            <div className="animate-scroll-right flex">
              {[...moviesRow1, ...moviesRow1].map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          
          <div className="overflow-hidden py-4">
            <div className="animate-scroll-left flex">
              {[...moviesRow2, ...moviesRow2].map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}