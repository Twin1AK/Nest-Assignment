// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UpdateUserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async create(userDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(userDto);
    return await this.userRepository.save(newUser);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.userRepository.findOne(id);
  }

  async update(id: string, userDto: UpdateUserDto): Promise<User | undefined> {
    await this.userRepository.update(id, userDto);
    return this.findById(id);
  }
}
