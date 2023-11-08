import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';
import databaseConfig from './database.config';


@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig),EmployeesModule], // Certifique-se de que o TypeOrmModule esteja importado aqui.
  providers: [],
  controllers: [],
})
export class AppModule {}
