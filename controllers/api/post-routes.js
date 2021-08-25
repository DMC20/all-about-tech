const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.post('/', withAuth, (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;