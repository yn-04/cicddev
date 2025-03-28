const { v4: uuidv4 } = require('uuid');

let urlDatabase = {}; // ที่เก็บ URL แบบชั่วคราว

exports.handler = async function(event, context) {
    const { url } = JSON.parse(event.body);  // รับ URL จาก request

    if (!url) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'URL is required' })
        };
    }

    const shortUrl = uuidv4().slice(0, 6);  // สร้าง short URL
    urlDatabase[shortUrl] = url;  // เก็บ URL

    return {
        statusCode: 200,
        body: JSON.stringify({ shortUrl: `https://${event.headers.host}/${shortUrl}` })
    };
};
