//npm install csvtojscon

const csv = require('csvtojson');

(async ()=> {
	const events = await csv().fromFile('Week_Events.csv');
	console.log(events);

})();