// src/user/user.controller.ts

import { Controller, Post, Body, Get, Param, Put, Request, UseGuards  } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { UserService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard())
  @Get('profile')
  getProfile(@Request() req) {
    return this.userService.findById(req.user.userId);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<User | undefined> {
    return this.userService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<User | undefined> {
    return this.userService.update(id, updateUserDto);
    
  }
}
