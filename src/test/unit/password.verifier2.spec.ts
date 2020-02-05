import {PasswordVerifier2} from '../../password.verifier2';

describe('password verifier2', () => {
  describe('on wrong length', () => {
    it('calls the logger', () => {
      const verifier = new PasswordVerifier2();

    });
  });
  describe('on missing capital', () => {
    it('calls the logger', () => {
      const verifier = new PasswordVerifier2();
    });
  });
});
