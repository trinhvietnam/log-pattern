/**
 * Created by NamTV on 3/20/2017.
 */
import {Logger} from '../utities/Logger';
// const TAG_FILE ='TAG_FILE = '+ process.mainModule.filename.match(/[\w-]+\.js/gi)[0];
var log = new Logger(__filename);
// var log = new Logger(TAG_FILE);
class Test{
    public run(){
        var t={a:10,b:'di choi'};
        log.log('Loi o dong nay',true,123,t);
    }
}
new Test().run();