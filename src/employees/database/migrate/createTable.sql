BEGIN TRY

BEGIN TRAN;


CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  role VARCHAR(255) NOT NULL,
  personal_id INT REFERENCES Personal(id)
);

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

CREATE TABLE document (
  id SERIAL PRIMARY KEY,
  id_personal INT REFERENCES Personal(id),
  document_type VARCHAR(255) NOT NULL,
  content BYTEA NOT NULL
);



CREATE INDEX idx_employee_name ON Employee(name);

ALTER TABLE Employee ADD CONSTRAINT CK_Employee_SomeColumn CHECK (SomeColumn >= 0);

ALTER TABLE Employee ADD CONSTRAINT UK_Employee_Email UNIQUE (email);
