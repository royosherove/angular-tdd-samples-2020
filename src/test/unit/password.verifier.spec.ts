import {PasswordVerifier} from '../../password.verifier';
import * as moment from 'moment';

describe('password verifier', () => {
  describe('on weekends', () => {
    it('does not work on a weekend', () => {
      const pw = new PasswordVerifier();
      const dayOfWeek = moment().day();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        expect(() => pw.verify('anything'))
          .toThrowMatching(thrown => thrown.message.includes('Weekends'));
      }
    });
  });
  describe('length too small', () => {
    it('fails', () => {
      const pw = new PasswordVerifier();
      const dayOfWeek = moment().day();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        expect(() => pw.verify('anything'))
          .toThrowMatching(thrown => thrown.message.includes('Weekends'));
      }
      else{
        const result = pw.verify('abc');

        expect(result).toBe(false);
      }
    });
  });
});
