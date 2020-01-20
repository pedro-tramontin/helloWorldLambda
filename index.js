console.log('Loading function');

exports.handler = async (event, context) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
//     event.body.version = 2;
    return { "isBase64Encoded": false, "statusCode": 200, "body": 7 };  // Echo back the first key value
    // throw new Error('Something went wrong');
};
