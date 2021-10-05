import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { query } from "express";
import { CoffeesService } from "./coffees.service";

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeServices: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery){
    //const {limit, offset} = paginationQuery
    return this.coffeeServices.findAll()
    //return `Only Limited Coffees:: ${limit} Offset::${offset}`
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return this.coffeeServices.findOne(id);
    //return `Few Coffees ${id}`
  }

  @Post()
  createOne(@Body() body){
    return this.coffeeServices.create(body)
    //return `Created Coffees ${JSON.stringify(body)}`
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() body){
    return this.coffeeServices.update(id, body);
    //return `This action updates ${id} coffee`;
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string){
    return this.coffeeServices.remove(id);
    //return `This action removes ${id} coffee`;
  }
}
