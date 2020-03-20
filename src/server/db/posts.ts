import { Query } from './index';

const all = async () => {
    Query('SELECT * FROM posts');
}

export default {
    all
}