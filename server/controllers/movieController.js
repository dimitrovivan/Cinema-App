const router = require('express').Router();

const { getAllMovies, getMovieById, updateMovieById } = require('../services/movieServices');
router.get('/all', async (req, res, next) => {
    try {
       let allMovies = await getAllMovies();
       res.status(200).json(allMovies);
    } catch(error) {
      next(error);
    }
});

router.get('/:id', async (req, res, next) => {
 
  try {
     let currMovie = await getMovieById(req.params.id);
     res.status(200).json(currMovie);
  } catch(error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    let currMovie = await updateMovieById(req.params.id, req.body.streams);
    res.status(201).json(currMovie);
  } catch(error) {
    next(error);
  }
});


module.exports = router;