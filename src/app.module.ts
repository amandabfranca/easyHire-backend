import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';
import databaseConfig from './database.config';


@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig),EmployeesModule],
  providers: [],
  controllers: [],
})
export class AppModule {}
