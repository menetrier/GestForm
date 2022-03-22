import { Controller, Get } from '@nestjs/common';

@Controller()
export class WelcomeController {
  constructor() {}

  /*
   ** GET handler
   **
   ** return basic HTML String to greet the user
   */
  @Get()
  getHello(): string {
    return `
      <h1>Hello world !</h1>
      <div>Looking for the GestForm exercice ? <a href='/gest-form'>Here we go !</a></div>
      <div>(You can also customize the route param to generate a custom sized array E.g. <a href='/gest-form/75'>/gest-form/75</a>)</div>
    `;
  }
}
