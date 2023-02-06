import express from 'express';

export  const homeRouter = express.Router();

/* GET home page. */
homeRouter.get('/', function(req, res, next) {
  res.send("Express server is UP");
});

// module.exports = indexRouter;
