// src/user/user.controller.ts
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(AuthGuard())
  @Get('profile')
  getProfile(@Request() req) {
    return this.userService.findById(req.user.userId);
  }
}
