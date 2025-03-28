let urlDatabase = {}; // In-memory database for storing short URLs

exports.handler = async function(event, context) {
    const shortUrl = event.path.split('/').slice(-1)[0]; // Extract short URL from the path
    const originalUrl = urlDatabase[shortUrl];  // Retrieve the original URL

    if (!originalUrl) {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: 'URL not found' })
        };
    }

    return {
        statusCode: 301,
        headers: {
            Location: originalUrl // Redirect to the original URL
        },
        body: ''
    };
};
