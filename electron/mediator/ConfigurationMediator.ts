import { envMediator } from '@alandrade21/electron-arch';
import { DEV_CONFIG_FOLDER_PATH } from '../constants';
import { app } from 'electron';
import * as configStorage from 'electron-json-storage';

class ConfigurationMediator {

  /**
   * Identifies the folder to be used as configuration folder, to verify and create configuration files.
   */
  private _configFolder: string;

  /**
   * Name to be used as file name on the config file. It also is used as key to the
   * electron-json-storage api.
   */
  private readonly configFileName = 'config';

  /**
   * Verifies which is the user's OS, and detects the user's home folder accordingly.
   *
   * If the evironment is development, the home user folder is set acordingly the the constant
   * DEV_CONFIG_FOLDER_PATH in constants.ts.
   *
   * If the environment is not development and the OS is windows, the config folder is set to the
   * folder .config inside the folder in which the app is installed.
   *
   * If the environment is not development and the OS is not windows (i.e. linux like OS), the home user
   * folder is set to the folder .config/exHeroics inside the actual OS home user folder.
   */
  constructor() {
    if (!envMediator.isDev()) {
      if (process.platform === 'win32') {
        this._configFolder = `${process.cwd()}/.config`;
      } else {
        this._configFolder = app.getPath('userData');
      }
    } else {
      this._configFolder = DEV_CONFIG_FOLDER_PATH;
    }

    configStorage.setDataPath(this.configFolder);
  }

  public doConfig(): void {
    configStorage.has(this.configFileName, (error: any, hasKey: boolean) => {
      if (error) {
        console.log('An error occurred when verifying the config file existance.', error);
        throw error;
      }

      if (hasKey) {
        this.readConfigFile();
      } else {
        this.createConfigFile();
      }
    });
  }

  private readConfigFile(): void {

  }

  private createConfigFile(): void {

  }

  get configFolder(): string {
    return this._configFolder;
  }

}

export const configMediator = new ConfigurationMediator();
