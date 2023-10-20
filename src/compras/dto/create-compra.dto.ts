import { IsString, IsNumber } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateCompraDto {
    @IsString()
    @ApiProperty({ description: 'La fecha en formato dd/mm/aaaa' })
    fecha: string

    @IsString()
    @ApiProperty({ description: 'El nombre del proveedor' })
    proveedor: string;
  
    @IsNumber()
    @ApiProperty({ description: 'El numero de comprobante' })
    nroComprobante: number;
  
    @IsString()
    @ApiProperty({ description: 'El nombre del artículo' })
    articulo: string;
  
    @IsNumber()
    @ApiProperty({ description: 'La cantidad del artículo' })
    cantidad: number;
  
    @IsNumber()
    @ApiProperty({ description: 'Precio unitario del artículo' })
    precioUnitario: number;
  
    @IsString()
    @ApiProperty({ description: 'Proyecto vinculado al artículo' })
    proyecto: string;
  
    @IsString()
    @ApiProperty({ description: 'Agrupación vinculada al proyecto' })
    agrupacion: string;

}
