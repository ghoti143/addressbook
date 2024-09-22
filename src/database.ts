import { Table, Column, Model, Sequelize } from 'sequelize-typescript';

@Table
export class Person extends Model {
  @Column
  firstName!: string;

  @Column
  lastName!: string;
}

export const sequelize = new Sequelize(
  process.env.DB_SCHEMA || 'postgres',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'postgres',
  {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    dialect: 'postgres',
    dialectOptions: {
      ssl: process.env.DB_SSL == 'true',
    },
  },
);

sequelize.addModels([Person]);
