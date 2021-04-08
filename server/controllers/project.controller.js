//--TODO--//
/**
 * 1. Research response status and provide middleware to showcase each 100th digit.
 * 
 */

const { Project } = require('../models/project.model');
module.exports = {
  allProjs: (req, res) => {
    Project.find({}).sort({expLevel: "asc"})
      .then(success => res.json(success))
      .catch(err => res.status(400).json(err));
  },
  oneProj: (req, res) => {
    Project.findOne({_id: req.params.id})
      .then(success => res.json(success))
      .catch(err => res.status(400).json(err));
  },
  addProj: (req, res) => {
    const {title, description, urlString, expLevel} = req.body;
    Project.create({
      title,
      description,
      urlString,
      expLevel
    })
      .then(success => res.json(success))
      .catch(err => res.status(400).json(err));
  },
  updateProj: (req, res) => {
    Project.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true})
      .then(success => res.json(success))
      .catch(err => res.status(400).json(err));
  },
  removeProj: (req, res) => {
    Project.deleteOne({_id: req.params.id})
      .then(success => res.json(success))
      .catch(err => res.status(400).json(err));
  }
}