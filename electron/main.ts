import { app } from 'electron';

import { MainWindowController } from './mainWindow/MainWindowController';
import { InitializationController } from './initialization/InitializationController';
import { DEV_CONFIG_FOLDER_PATH } from './constants';

app.on('ready', () => {

  // It is necessary to create the window first in order to show the dialogs.
  const mainWindowController = new MainWindowController();

  // Do the app initialization.
  try {
    const initController = new InitializationController('ExHeroics', DEV_CONFIG_FOLDER_PATH);
    initController.doConfig();
  } catch (error) {
    app.quit();
    return;
  }

  
});







