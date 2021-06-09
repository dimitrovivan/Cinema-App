const router = require('express').Router();

const { getAllMovies, getMovieById } = require('../services/movieServices');
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
     console.log(currMovie);
     res.status(200).json(currMovie);
  } catch(error) {
    next(error);
  }
});


module.exports = router;