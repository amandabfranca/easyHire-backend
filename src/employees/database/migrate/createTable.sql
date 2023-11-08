BEGIN TRY

BEGIN TRAN;



-- Criação da tabela Employee
CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  role VARCHAR(255) NOT NULL,
  personal_id INT REFERENCES Personal(id)
);

-- Criação da tabela Personal
CREATE TABLE personal (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  birth_date DATE NOT NULL,
  cpf VARCHAR(11) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  street VARCHAR(255) NOT NULL,
  number VARCHAR(10) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(50) NOT NULL
);

-- Criação da tabela Document
CREATE TABLE document (
  id SERIAL PRIMARY KEY,
  id_personal INT REFERENCES Personal(id),
  document_type VARCHAR(255) NOT NULL,
  content BYTEA NOT NULL
);

-- Adicione outras tabelas conforme necessário de acordo com suas entidades

-- Exemplo de índice
CREATE INDEX idx_employee_name ON Employee(name);

-- Exemplo de verificação de restrição (CHECK constraint)
ALTER TABLE Employee ADD CONSTRAINT CK_Employee_SomeColumn CHECK (SomeColumn >= 0);

-- Exemplo de chave única
ALTER TABLE Employee ADD CONSTRAINT UK_Employee_Email UNIQUE (email);
