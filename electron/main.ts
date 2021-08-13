/*
* Copyright (c) 2021 André Andrade - alandrade21@gmail.com
*
* This file is part of the "exHeroics" app.
*
* "exHeroics" is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* any later version.
*
* "exHeroics" is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with "exHeroics". If not, see <https://www.gnu.org/licenses/>.
*/

import { app, dialog } from 'electron';

import { InitializationController } from './initialization/InitializationController';
import { DEV_CONFIG_FOLDER_PATH, DEV_DATA_FOLDER_PATH } from './constants';
import { MainWindowController, envHelper, MainWindowPosition } from '@alandrade21/electron-arch';

try {
  app.on('ready', () => {

    if(!app.isPackaged) {
      envHelper.printEnvironment();
    }
    
    // It is necessary to create the window first in order to show the dialogs.
    MainWindowController.initialize(MainWindowPosition.getMaximizedInstance());

    // Do the app initialization.
    try {
      console.log('entrei no try');
      const initController = new InitializationController('exHeroics', 
                                                          DEV_CONFIG_FOLDER_PATH, 
                                                          DEV_DATA_FOLDER_PATH);
      initController.doConfig();
    } catch (error) {
      console.log('entrei no catch ', error);
      dialog.showErrorBox('Initialization Error', error.message);
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
