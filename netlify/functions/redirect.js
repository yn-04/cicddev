let urlDatabase = {}; // ที่เก็บ URL แบบชั่วคราว

exports.handler = async function(event, context) {
    const shortUrl = event.path.split('/').slice(-1)[0];  // รับ short URL จาก path
    const originalUrl = urlDatabase[shortUrl];  // หา URL เดิมจาก short URL

    if (!originalUrl) {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: 'URL not found' })
        };
    }

    // รีไดเรคไปยัง URL เดิม
    return {
        statusCode: 301,
        headers: {
            Location: originalUrl // ส่งผู้ใช้ไปยัง URL เดิม
        },
        body: ''
    };
};
