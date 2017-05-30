#!/usr/bin/env node

const unmarshalItem = require('dynamodb-marshaler').unmarshalItem;
const process = require('process');

process.stdin.setEncoding('utf8');

let input = '';

process.stdin.on('readable', () => {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        input += chunk;
    }
});


process.stdin.on('end', () => {
    const data = JSON.parse(input);
    let result = '';

    if(data.Item) result = processItem(data);
    if(data.Items) result = processItems(data);
    if(data.Responses) result = processBatch(data);

    process.stdout.write(JSON.stringify(result, null, 4) + '\n');
});


function processItem(data) {
    return unmarshalItem(data.Item);
}

function processItems(data) {
    return data.Items.map(unmarshalItem);
}

function processBatch(data) {
    const tables = Object.keys(data.Responses);

    return tables.reduce((result, tableName) => {
        result[tableName] = data.Responses[tableName].map(unmarshalItem);
        return result;
    }, {});
}