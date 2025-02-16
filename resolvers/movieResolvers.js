let movies = [
    { id: '1', name: 'Inception', director_name: 'Christopher Nolan', production_house: 'Warner Bros', release_date: '2010-07-16', rating: 8.8 },
    { id: '2', name: 'The Matrix', director_name: 'Wachowski Sisters', production_house: 'Warner Bros', release_date: '1999-03-31', rating: 8.7 }
  ];
  
  const resolvers = {
    Query: {
      getAllMovies: () => movies,
      getMovieById: (parent, args) => movies.find(movie => movie.id === args.id),
    },
    Mutation: {
      addMovie: (parent, args) => {
        const newMovie = { id: `${movies.length + 1}`, ...args };
        movies.push(newMovie);
        return newMovie;
      },
      updateMovie: (parent, args) => {
        const movieIndex = movies.findIndex(movie => movie.id === args.id);
        if (movieIndex === -1) throw new Error('Movie not found');
        movies[movieIndex] = { ...movies[movieIndex], ...args };
        return movies[movieIndex];
      },
      deleteMovie: (parent, args) => {
        const movieIndex = movies.findIndex(movie => movie.id === args.id);
        if (movieIndex === -1) throw new Error('Movie not found');
        movies.splice(movieIndex, 1);
        return `Movie with ID ${args.id} deleted successfully`;
      }
    }
  };
  
  module.exports = resolvers;
  