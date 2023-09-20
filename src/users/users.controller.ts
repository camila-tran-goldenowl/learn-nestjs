import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import * as uuid from 'uuid';
import { IUser } from './interfaces/user';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() user: Omit<IUser, 'id'>): any {
    return this.usersService.create({ ...user, id: uuid.v4() });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: Omit<IUser, 'id'>) {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
