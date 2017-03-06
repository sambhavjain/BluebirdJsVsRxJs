let Promise = require('bluebird')
let superagent = require('superagent')
let apiUrl = `http://jsonplaceholder.typicode.com/users/1`;


exports.fetch_bluebird_data = function(req, res){
	let promisified = new Promise((resolve, reject) => {
    superagent
        .get(apiUrl)
        .end((err, res) => {
            if (err) {
                return reject(err);
            }

            let data,
                username;

            data = res.body;
            username = data.username
            console.log(data.username)
            return resolve(username);
        });
});

promisified
    .then((username) => {
        console.log('username: ', username);
        res.json(username)
    }, (err) => {
        console.error('Error while getting username: ', err);
    });

}