import { DEV_CONFIG_FOLDER_PATH } from './constants';
import { envMediator } from '@alandrade21/electron-arch';
import { app } from 'electron';
import * as configStorage from 'electron-json-storage';

envMediator.printEnvironment();

console.log('electron.app.getPath.home', app.getPath('home'));
console.log('electron.app.getPath.apData', app.getPath('appData'));
console.log('electron.app.getPath.userData', app.getPath('userData'));
console.log('jsonStorage default path ', configStorage.getDefaultDataPath());
console.log('jsonStorage data path ', configStorage.getDataPath());

configStorage.setDataPath(`${DEV_CONFIG_FOLDER_PATH}/.config/exHeroics/storage`);
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
});



