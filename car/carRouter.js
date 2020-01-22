const express = require('express');

const router = express.Router();

const Car = require('./carDb');

router.get('/', (req, res) => {
  Car.get()
    .then(car => {
      res.status(200).json(car)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ message: "We can't get any cars!"})
    })
})

router.get('/:id', (req, res) => {
  Car.getById(req.params.id)
    .then(car => {
      res.status(200).json(car)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({message: "This car could not be retrieved"})
    })
})

router.post('/', (req, res) => {
  Car.insert(req.body)
    .then(car => {
      res.status(201).json(car)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({message: "Error adding the car"})
    });
})
module.exports = router;