import { GestFormService } from '../../services/gest-form/gest-form.service';
import { GestFormController } from './gest-form.controller';

describe('GestFormController', () => {
  let gestFormService: GestFormService = new GestFormService();
  let gestFormController: GestFormController = new GestFormController(gestFormService);

  describe('GET', () => {
    it('should call GestFormService', () => {
      const gestFormServiceSpy = jest.spyOn(gestFormService, 'generate');
      
      gestFormController.generateGestFormValues({});
      expect(gestFormServiceSpy).toHaveBeenCalledTimes(1);
    });
  });
});
