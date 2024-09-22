import { Router } from 'express';
import { Person } from '../database';

export const persons = Router();

persons.get('/', function (req, res) {
  Person.findAll()
    .then(persons => {
      res.status(200).send(JSON.stringify(persons));
    })
    .catch(err => {
      res.status(500).send(JSON.stringify(err));
    });
});

persons.get('/:id', function (req, res) {
  Person.findByPk(req.params.id)
    .then(person => {
      res.status(200).send(JSON.stringify(person));
    })
    .catch(err => {
      res.status(500).send(JSON.stringify(err));
    });
});

persons.put('/', function (req, res) {
  Person.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    id: req.body.id,
  })
    .then(person => {
      res.status(200).send(JSON.stringify(person));
    })
    .catch(err => {
      res.status(500).send(JSON.stringify(err));
    });
});

persons.delete('/:id', function (req, res) {
  Person.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).send();
    })
    .catch(err => {
      res.status(500).send(JSON.stringify(err));
    });
});
