import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

import { InitializationController } from './initialization/InitializationController';
import { DEV_CONFIG_FOLDER_PATH } from './constants';
import { MainWindowController, envDetector } from '@alandrade21/electron-arch';

try {
  app.on('ready', () => {

    // envDetector.printEnvironment();

    // It is necessary to create the window first in order to show the dialogs.
    MainWindowController.initialize();

    // Do the app initialization.
    try {
      console.log('entrei no try');
      const initController = new InitializationController('ExHeroics', DEV_CONFIG_FOLDER_PATH);
      initController.doConfig();
    } catch (error) {
      console.log('entrei no catch ', error);
      app.quit();
      return;
    }

    console.log('cheguei aqui.');
    // console.log('main window ', mainWindowController.mainWindow);
    if (MainWindowController.mainWindow) {
      MainWindowController.mainWindow.show();
    }
  });
} catch (e) {
  // Catch Error
  // throw e;
  console.log(e);
}







