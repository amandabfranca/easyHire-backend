import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost', // Endereço do servidor PostgreSQL
  port: 5432, // Porta padrão do PostgreSQL
  username: 'postgres', // Nome de usuário do PostgreSQL
  password: 'postgres', // Senha do PostgreSQL
  database: 'postgres', // Nome do banco de dados
  synchronize: true, // Sincroniza o esquema com o banco de dados (apenas para desenvolvimento)
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // Caminho para as entidades
};

export default databaseConfig;
