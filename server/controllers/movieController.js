const router = require('express').Router();

const { getAllMovies } = require('../services/movieServices');
router.get('/all', async (req, res, next) => {
    try {
       let allMovies = await getAllMovies();
       res.status(200).json(allMovies);
    } catch(error) {
      next(error);
    }
});


module.exports = router;