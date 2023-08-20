// src/task/task.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto, UpdateTaskDto } from './task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private readonly taskRepository: Repository<Task>) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findById(id: string): Promise<Task | undefined> {
    // return this.taskRepository.findOne(id);
    const options: FindOneOptions<Task> = { where: { id } };
    return this.taskRepository.findOne(options);
  }

  async create(taskDto: CreateTaskDto): Promise<Task> {
    const newTask = this.taskRepository.create(taskDto);
    return this.taskRepository.save(newTask);
  }

  async update(id: string, taskDto: UpdateTaskDto): Promise<Task | undefined> {
    await this.taskRepository.update(id, taskDto);
    return this.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
