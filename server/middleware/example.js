//      /server/middleware/example.js
//
//      Prints out a message to test importing/exporting


const example = (req, res, next) => {
    req.log.info('Message from example handler');
    return next();
}


export default example;
