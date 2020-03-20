import { Query } from './index';

const all = async () => {
    Query('SELECT * FROM posts');
}

const one = async (id: string) =>
Query('SELECT * FROM posts WHERE id = ?', [id])

export default {
    all,
    one
}