const uuid = require('uuid/v1');
const Movie = require('../models/Movie');

exports.getAllMovies = (req, res, next) => {
  Movie.find().then(
    (movies) => {
      const mappedMovies = movies.map((movie) => {
        movie.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + movie.imageUrl;
        return movie;
      });
      res.status(200).json(mappedMovies);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  );
};

exports.getOneMovie = (req, res, next) => {
  Movie.findById(req.params.id).then(
    (movie) => {
      if (!movie) {
        return res.status(404).send(new Error('Movie not found!'));
      }
      movie.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + movie.imageUrl;
      res.status(200).json(movie);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  )
};

/**
 *
 * Si temps nécessaire pour validation formulaire :
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * movies: [string] <-- array of movie _id
 *
 */
exports.orderMovies = (req, res, next) => {
  if (!req.body.contact ||
      !req.body.contact.firstName ||
      !req.body.contact.lastName ||
      !req.body.contact.address ||
      !req.body.contact.city ||
      !req.body.contact.email ||
      !req.body.movies) {
    return res.status(400).send(new Error('Bad request!'));
  }
  let queries = [];
  for (let movieId of req.body.movies) {
    const queryPromise = new Promise((resolve, reject) => {
      Movie.findById(movieId).then(
        (movie) => {
          if (!movie) {
            reject('Movie not found: ' + movieId);
          }
          movie.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + movie.imageUrl;
          resolve(movie);
        }
      ).catch(
        () => {
          reject('Database error!');
        }
      )
    });
    queries.push(queryPromise);
  }
  Promise.all(queries).then(
    (movies) => {
      const orderId = uuid();
      return res.status(201).json({
        contact: req.body.contact,
        movies: movies,
        orderId: orderId
      })
    }
  ).catch(
    (error) => {
      return res.status(500).json(new Error(error));
    }
  );
};
