import { Module } from '@nestjs/common';

import { WelcomeController } from './controllers/welcome/welcome.controller';
import { GestFormController } from './controllers/gest-form/gest-form.controller';

import { GestFormService } from './services/gest-form/gest-form.service';

@Module({
  imports: [],
  controllers: [WelcomeController, GestFormController],
  providers: [GestFormService],
})
export class AppModule {}
