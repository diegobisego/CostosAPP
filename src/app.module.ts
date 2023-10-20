import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigDbModule } from './config-db/config-db.module';
import { ComprasModule } from './compras/compras.module';


@Module({
  imports: [ConfigDbModule, ComprasModule],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
