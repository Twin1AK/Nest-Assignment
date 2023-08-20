// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async create(userDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(userDto);
    return await this.userRepository.save(newUser);
  }

  async findById(id: number): Promise<User | undefined> {
    const options: FindOneOptions<User> = { where: { id } };
    return this.userRepository.findOne(options);
  }

  async update(id: string, userDto: UpdateUserDto): Promise<User | undefined> {
    await this.userRepository.update(id, userDto);
    return this.findById(id);
  }
}
