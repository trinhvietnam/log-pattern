/**
 * Created by NamTV on 3/20/2017.
 */
var winston = require('winston');
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: __dirname+'/../log/logFile.log',json:true})
    ]
});
export class Logger{
    private tagFile;
    private getGoodFor(values){
        var formatter = '';
        for (var i = 0; i < values.length; i++) {
            switch (typeof values[i]) {
                case 'string':
                    formatter += ' %s';
                    break;
                case 'number':
                    formatter += ' %d';
                    break;
                default:
                    formatter += ' %j';
                    break;
            }
        }
        return formatter;
    }
    constructor(tf:String){
        this.tagFile = '['+tf+']';
    }
    public log(...values){
        this.info(...values);
    }
    public info(...values){
        var formatter = this.tagFile + this.getGoodFor(values);
        logger.log('info',formatter,...values);
    }
    public err(...values){
        var formatter = this.tagFile + this.getGoodFor(values);
        logger.log('error',formatter,...values);
    }

    public errFormat(...values){
        logger.log('error',...values);
    }
    public infoFormat(...values){
        logger.log('info',...values);
    }
    public logFormat(...values){
        logger.log('info',...values);
    }
}
const TAG_FILE ='TAG_FILE = '+ process.mainModule.filename.match(/[\w-]+\.js/gi)[0];
