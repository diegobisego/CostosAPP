import { Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';

// se traen estas fn de mongoose
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// esquema de compra
import { Compra } from './schemas/compra.schema';

@Injectable()
export class ComprasService {
  // se genera el constructor con los datos imprtados
  constructor(@InjectModel(Compra.name) private compraModel: Model<Compra>) {}

  async create(createCompraDto: CreateCompraDto) {
    const createdCompra = new this.compraModel(createCompraDto);
    return await createdCompra.save();
  }

  async findAll() {
    return this.compraModel.find().exec();
  }

  async findOne(id: number) {
    return `This action returns a #${id} compra`;
  }

  async update(id: number, updateCompraDto: UpdateCompraDto) {
    return `This action updates a #${id} compra`;
  }

  async remove(id: number) {
    return `This action removes a #${id} compra`;
  }
}
