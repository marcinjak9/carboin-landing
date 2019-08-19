exports.handler = function(event, context, callback) {
  console.log(event)
  console.log(JSON.parse(event.body))
  callback(null, {
    statusCode: 200,
    body: "*ok*"
  });
  // if (event.httpMethod === 'POST') {
  // }
}