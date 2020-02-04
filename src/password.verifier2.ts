import * as moment from 'moment';
import {logger} from './infra/logger.helper';

export class PasswordVerifier2 {

  public verify(text:string):boolean {
    const dayOfWeek = moment().day();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      logger.info('weekend error was raised');
      throw Error('Error: Password Verification is Disabled on Weekends');
    }

    //length
    if (text.length < 8) {
      logger.info('failed for length');
      return false;
    }
    //needs an uppercase
    if (text.toLowerCase() === text) {
      logger.info('failed for uppercase');
      return false;
    }
    logger.info('success!');
    return true;
  }
}
