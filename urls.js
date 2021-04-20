const fs = require('fs');
const process = require('process');
const axios = require('axios');

// Read
function url(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file "${path}" \n${err}`);
            process.exit(1);
        } else {
            let urls = data.split('\n');
            getUrls(urls);
        }
    })
}

// GET
async function getUrls(urlArray) {
    for (let i=0; i<urlArray.length; i++) {
        try {
            let res = await axios.get(urlArray[i]);
            let url = getFilename(urlArray[i]);
            write(url, res.data);
        } catch (err) {
            console.error(`Couldn't download ${urlArray[i]}: ${err}`);
        }
    }
}

// Write
function write(out, data) {
    fs.writeFile(out, data, 'utf8', (err) => {
        if (err) {
            console.log(`Error writing to ${out} : ${err}`);
        }
        console.log(`Wrote to ${out}`);
    });
}


// Get Filename
function getFilename(url) {
    let start = url.indexOf(':') + 3;
    let end;
    if (url.indexOf('.com') !== -1) {
        end = url.indexOf('.com') + 4;
    } else {
        end = url.indexOf('.org') + 4;
    }
    return url.slice(start, end);
}

url(process.argv[2]);