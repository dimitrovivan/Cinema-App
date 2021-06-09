module.exports = (err, req, res, next) => {
     err.message = err.message || "Something went wrong...";
     err.status = err.status || 500;

     res.status(err.status).json({type: err.type, message: err.message});
}