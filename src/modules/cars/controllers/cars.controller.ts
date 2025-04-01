import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarsService } from '../services/cars.service';
import { CreateCarDto } from '../dto/car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly CarsService: CarsService) {}

  @Get()
  getCarsAll() {
    return 'Todos los Carros';
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.CarsService.create(createCarDto);
  }
}
