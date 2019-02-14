import { InitializationController } from './initialization/InitializationController';
import { DEV_CONFIG_FOLDER_PATH } from './constants';
import { envDetector, ConfigFileManager } from '@alandrade21/electron-arch';

envDetector.printEnvironment();

const x = new InitializationController('ExHeroics', DEV_CONFIG_FOLDER_PATH);
x.doConfig();
// console.log(x.appOptions);






