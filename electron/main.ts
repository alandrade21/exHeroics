import { DEV_CONFIG_FOLDER_PATH } from './constants';
import { envDetector, ConfigFileManager } from '@alandrade21/electron-arch';
// import * as configStorage from 'electron-json-storage';

envDetector.printEnvironment();

const x: ConfigFileManager = new ConfigFileManager();
x.filePath = `${DEV_CONFIG_FOLDER_PATH}/.config/exHeroics/`;
console.log(x.fileExist());

/* configStorage.setDataPath(`${DEV_CONFIG_FOLDER_PATH}/.config/exHeroics/storage`);
configStorage.set('teste', {teste: 'conteudo novo'}, (erro: Error) => {
  console.log('entrei aqui 1');
  console.log(erro);
});
configStorage.set('teste2', {teste2: 'conteudo2'}, (erro: Error) => {
  console.log('entrei aqui 2');
  console.log(erro);
});
configStorage.has('teste', (erro: Error, hasKey: boolean) => {
  console.log(hasKey);
});
configStorage.has('outro', (erro: Error, hasKey: boolean) => {
  console.log(hasKey);
}); */



