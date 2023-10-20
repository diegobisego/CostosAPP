import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ComprasService } from './compras.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Compras')
@Controller('compras')
export class ComprasController {
  constructor(private readonly comprasService: ComprasService) {}

  // CREAR UNA COMPRA
  @Post()
  @ApiOperation({
    summary: 'Creacion de compra',
    description: 'Se crea una compra dentro de la base de datos',
  })
  @ApiResponse({ status: 201, description: 'Compra creada con exito' })
  @ApiResponse({status: 400, description: 'Error al crear la compra dentro de la base de datos'})
  @ApiResponse({ status: 500, description: 'Problemas en el servidor' })
  async create(@Body() createCompraDto: CreateCompraDto) {
    try {
      return await this.comprasService.create(createCompraDto);
    } catch (error) {
      throw new HttpException('Error específico de la aplicación: ', error);
    }
  }

  // OBTENER COMPRAS
  @Get()
  async findAll() {
    return this.comprasService.findAll();
  }

  // OBTENER UNA COMPRA
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.comprasService.findOne(+id);
  }

  // EDITAR UNA COMPRA
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCompraDto: UpdateCompraDto,
  ) {
    return this.comprasService.update(+id, updateCompraDto);
  }

  // ELIMINAR UNA COMPRA
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.comprasService.remove(+id);
  }
}
