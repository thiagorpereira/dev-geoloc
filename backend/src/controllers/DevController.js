const api = require('../services/api');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },

  async store(req, res) {
    const {github_username, techs, latitude, longitude} = req.body;
  
    let dev = await Dev.findOne({github_username});

    if (!dev) {
      const response = await api.get(`/users/${github_username}`);
    
      const {name = login, avatar_url, bio } = response.data; //If name don't existis name=login
      
      // if (!name) {
      //   name = response.data.login;
      // }
    
      const techsArray = parseStringAsArray(techs);//Separa string por, e tira o espaço
    
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }
    
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      })
    }
    
    return res.json(dev);
  }
};