import { WelcomeController } from './welcome.controller';

describe('AppController', () => {
  let welcomeController: WelcomeController = new WelcomeController();

  describe('root', () => {
    it('should return a warm greeting', () => {
      expect(welcomeController.getHello()).toBe(`
      <h1>Hello world !</h1>
      <div>Looking for the GestForm exercice ? <a href='/gest-form'>Here we go !</a></div>
      <div>(You can also customize the route param to generate a custom sized array E.g. <a href='/gest-form/75'>/gest-form/75</a>)</div>
    `);
    });
  });
});
