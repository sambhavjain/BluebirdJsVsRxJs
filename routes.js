var Rx = require('./rx'),
	Bluebird = require('./bluebird')

module.exports = function(app){
	app.get('/api_for_rx', Rx.fetch_rx_data)
	app.get('/api_for_bluebird', Bluebird.fetch_bluebird_data)
}