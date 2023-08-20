// src/task/task.dto.ts
import { IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: string;

  @IsDateString()
  dueDate: Date;
}

export class UpdateTaskDto {
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @IsNotEmpty()
  @IsOptional()
  status?: string;

  @IsDateString()
  @IsOptional()
  dueDate?: Date;
}
