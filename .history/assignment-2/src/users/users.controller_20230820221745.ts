// src/user/user.controller.ts
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard())
  @Get('profile')
  getProfile(@Request() req) {
    return this.userService.findById(req.user.userId);
  }
}
