const http = require('http');
const util = require('util');

function asyncRequest(amountRequest) {
    for(let i =0; i < amountRequest; i++) {
        http.get('http://127.0.0.1:3000', (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            console.log(data);
        });

        }).on("error", (err) => {
        console.log("Error: " + err.message);
        });
    }
}

function syncRequest() {
    //TODO
    console.log('send sync requests!');
}

if (process.argv[2] && process.argv[3] === 'async') {
    asyncRequest(Number(process.argv[2]));
} else if(process.argv[2] && process.argv[3] === 'sync') {
    syncRequest(Number(process.argv[2]));
} else {
    console.log('укажите количество запросов и метод async/sync');
}