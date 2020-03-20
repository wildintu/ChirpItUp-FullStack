import * as mysql from 'mysql';
import posts from './posts';

export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'poster',
    password: 'blah',
    database: 'chirptable'
});

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve,reject) => {
        Connection.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        })
    })
}

function getPost(id: string) {
    return new Promise((resolve, reject) => {
            Connection.query(
                `SELECT * FROM chirps where id = ${id}`,
                (err, results) => {
                    if (err) {
                        reject(err);
                        console.log('You have an error!');
                    }
                    resolve(results);
                    // connection.release();
                }
            );
    });
}


function getPosts() {
    return new Promise((resolve, reject) => {
            Connection.query('SELECT * FROM posts', (err, results) => {
                if (err) {
                    reject(err);
                    console.log('You have an error!');
                }
                
                let posts = results.map((post: any) => {
                    return {
                        user: post.user,
                        text: post.text,
                    };
                });
                resolve(posts);
                // Connection.release();
            });
        });
    };

export default {
    posts,
    getPosts: getPosts,
    getPost: getPost

}