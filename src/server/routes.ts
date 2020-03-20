import * as express from 'express';
import db from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/posts', async(req, res) => {
    try{
        res.json(await db.posts.all());
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('api/posts/:id?', async (req, res) => {
    let id = req.params.id;
    if (id) {
        try {
            res.json((await db.posts.one(id))[0])
        } catch (err) {
            if (err) throw err;
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await db.posts.all());
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    }
})

export default router;