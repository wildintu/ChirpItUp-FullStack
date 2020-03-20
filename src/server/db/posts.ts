import { Query } from './index';

const all = async () => {
    Query('SELECT * FROM posts');
}

const one = async (id: string) =>
Query('SELECT * FROM posts WHERE id = ?', [id])

const post = async (user: number, text:string) => 
Query(`INSERT INTO chirps(User, Text) VALUES(${user}, "${text}")`)


export default {
    all,
    one,
    post
}