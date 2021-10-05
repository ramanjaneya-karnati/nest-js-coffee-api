import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { query } from "express";
import { CoffeesService } from "./coffees.service";
import { CreateCoffeeDto } from "./dto/create-coffee.dto";
import { UpdateCoffeeDto } from "./dto/update-coffee.dto";

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeServices: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery){
    //const {limit, offset} = paginationQuery
    return this.coffeeServices.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return this.coffeeServices.findOne(id);
  }

  @Post()
  createOne(@Body() createCoffeeDto: CreateCoffeeDto){
    console.log(createCoffeeDto instanceof CreateCoffeeDto)
    return this.coffeeServices.create(createCoffeeDto)
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto){
    return this.coffeeServices.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string){
    return this.coffeeServices.remove(id);
  }
}
