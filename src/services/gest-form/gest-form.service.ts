import { Injectable } from '@nestjs/common';

@Injectable()
export class GestFormService {

  /*
  ** return 'Geste' if the generated value can be divided by 3, 'Forme' if it can be divided by 5, 'GestForm' if it can be divided by both 3 and 5 or the random number generated if not possible
  **
  ** @Input : desired quantity to process (default 42)
  ** @Output : Array of number and strings
  */
  generate(qty: number = 42): (string | number)[] {
    let result: (string | number)[] = [];

    for (let i = 0; i < qty; i++) {
      let value = this.getRandomNumber();

      if (value % 3 == 0 && value % 5 == 0) result.push('GestForm');
      else if (value % 3 == 0) result.push('Geste');
      else if (value % 5 == 0) result.push('Forme');
      else result.push(value);
    }

    return result;
  }

  /*
  ** return a positive or negative number between -1000 and +1000
  **
  ** @Output : number
  */
  private getRandomNumber(): number {
    return Math.ceil(Math.random() * 1000) * (Math.round(Math.random()) ? 1 : -1);
  }
}
