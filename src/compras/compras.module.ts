import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComprasService } from './compras.service';
import { ComprasController } from './compras.controller';
import { CompraSchema, Compra } from './schemas/compra.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Compra.name, schema: CompraSchema }])],
  controllers: [ComprasController],
  providers: [ComprasService],
})
export class ComprasModule {}
