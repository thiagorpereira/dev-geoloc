const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
      //Busca todos devs num raio 10km
      // Filtrar por tecnologias

      const { latitude, longitude, techs} = req.query;

      const techsArray = parseStringAsArray(techs);

      const devs = await Dev.find({
        techs: {
          $in: techsArray, //https://docs.mongodb.com/manual/reference/operator/query/
        },
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            $maxDistance: 10000 //10km
          }
        }
      })

      return res.json(devs);
    }
}