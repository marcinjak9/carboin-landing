exports.handler = function(event, context, callback) {
  if (event.httpMethod === 'POST') {
    console.log(event)
    console.log(JSON.parse(event.body))
    callback(null, {
      statusCode: 200,
      body: "*ok*"
    });
  }
}