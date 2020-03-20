import { Query } from './index';

const all = async () => 
Query('SELECT * FROM posts');

const one = async (id: string) =>
Query('SELECT * FROM posts WHERE id = ?', [id])

const post = async (user: string, text: string) => 
Query(`INSERT INTO posts(user, text) VALUES('${user}', '${text}')`)

const put = async (id: string, user: string, text: string) =>
Query(`UPDATE posts SET user='${user}', text='${text}' WHERE id =?`,[id])

const del = async (id: string) =>
Query('DELETE FROM posts WHERE id =?', [id])


export default {
    all,
    one,
    post,
    put,
    del
}