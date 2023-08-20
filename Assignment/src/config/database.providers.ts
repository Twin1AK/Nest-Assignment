import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'your-username',
  password: 'your-password',
  database: 'your-database-name',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};