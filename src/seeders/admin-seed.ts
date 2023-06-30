import { QueryInterface } from 'sequelize';
import { v4 as uuidv4 } from 'uuid'
import * as helper from '../helpers'

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        id: uuidv4(),
        email: 'admin@ywmnet.com',
        password: await helper.password.hash('Password@12345'),
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete(
      'users',
      { email: 'admin@ywmnet.com' },
      {}
    );
  },
};
