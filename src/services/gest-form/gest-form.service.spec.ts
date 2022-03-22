import { GestFormService } from "./gest-form.service";

describe('GestFormService', () => {
  let gestFormService: GestFormService = new GestFormService();
  let values = [1, 2, 3, 4, 5, -15];

  jest.spyOn(GestFormService.prototype as any, 'getRandomNumber').mockImplementation(() => values.shift());

  describe('#generate', () => {
    it("should return 'Geste' if the generated value can be divided by 3, 'Forme' if it can be divided by 5, 'GestForm' if it can be divided by both 3 and 5 or the random number generated if not possible", () => {
      expect(gestFormService.generate(6)).toEqual([1, 2, 'Geste', 4, 'Forme', 'GestForm']);
    });
  });
});
