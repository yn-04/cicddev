const uuid = require('uuid').v4;

let urlDatabase = {}; // In-memory database for storing short URLs

exports.handler = async function(event, context) {
    const { url } = JSON.parse(event.body);  // Get the original URL from the body

    if (!url) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'URL is required' })
        };
    }

    // Create a short URL key
    const shortUrl = uuid().slice(0, 6);  // Create a unique 6-character string
    urlDatabase[shortUrl] = url;

    // Return the shortened URL
    return {
        statusCode: 200,
        body: JSON.stringify({ shortUrl: `https://${event.headers.host}/${shortUrl}` })
    };
};
