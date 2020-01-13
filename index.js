console.log('Loading function');

exports.handler = async (event, context) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('value1 =', event.body);
    return { "isBase64Encoded": false, "statusCode": 200, "body": event.body };  // Echo back the first key value
    // throw new Error('Something went wrong');
};
