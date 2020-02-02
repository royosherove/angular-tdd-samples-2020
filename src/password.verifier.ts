// import moment
import * as moment from 'moment';

export class PasswordVerifier {

  public verify(text:string):boolean {
    const dayOfWeek = moment().day();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      throw Error('Error: Password Verification is Disabled on Weekends');
    }

    //length
    if (text.length < 8) {
      return false;
    }
    //needs an uppercase
    if (text.toLowerCase() === text) {
      return false;
    }
    return true;
  }
}
