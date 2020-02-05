import * as moment from 'moment';
import {logger} from './infra/logger.helper';

export class PasswordVerifier2 {

  public verify(text:string):boolean {
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
