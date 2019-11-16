import express from 'express';
import User from '../models/user';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/:id', (req, res) => {
    User.findOne({_id:ObjectId(req.params.id)})
        .exec(function(err, data){
            res.send(data);
        })
});

router.post('/register', async (req, res) => {
        const user = await User.create(req.body);
        res.send(user);
});

router.put('/all', (req, res) => {
    res.send({type: 'PUT'});
});

router.delete('/:id', (req, res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;