import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Compra extends Document {
  @Prop({ required: true })
  fecha: string;

  @Prop({ required: true })
  proveedor: string;

  @Prop({ required: true })
  nroComprobante: number;

  @Prop({ required: true })
  articulo: string;

  @Prop({ required: true })
  cantidad: number;

  @Prop({ required: true })
  precioUnitario: number;

  @Prop({ type: Number })
  total: number;

  @Prop({ required: true })
  proyecto: string;

  @Prop({ required: true })
  agrupacion: string;
}

export const CompraSchema = SchemaFactory.createForClass(Compra);

// Se define para que cargue total como propiedad
CompraSchema.pre('save', function (next) {
  this.total = this.cantidad * this.precioUnitario;
  next();
});
