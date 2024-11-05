const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message,logname) => {
    const dateTime = `${format(new Date(), 'ddMMyyyy\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);

    // Corrected the declaration of `pathtosave`
    const pathtosave = path.join(__dirname, 'logs'); 

    try {
        if (!fs.existsSync(pathtosave)) {
            await fsPromises.mkdir(pathtosave);
        }
        await fsPromises.appendFile(path.join(pathtosave,logname ), logItem);
    } catch (err) {
        console.log(err);
    }
};

const logger=(req,res,next)=>{
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`)
    console.log(`${req.method} ${req.path}`,'event.txt') //print request path
    next()
  }

module.exports = {logEvents,logger};
