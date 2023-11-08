import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost', // Endereço do servidor PostgreSQL
  port: 5432, // Porta 
  username: 'postgres', // Nome de usuário do PostgreSQL
  password: 'postgres', // Senha do PostgreSQL
  database: 'postgres', // Nome do banco de dados
  synchronize: true, 
  entities: [__dirname + '/**/*.entity{.ts,.js}'], 
};

export default databaseConfig;
