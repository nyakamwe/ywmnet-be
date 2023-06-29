import { QueryInterface } from 'sequelize';
import { User } from '../models/User';

export async function up(queryInterface: QueryInterface): Promise<void> {
  // Perform your data seeding operations using queryInterface
  await queryInterface.bulkInsert('users', [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    // ...
  ]);
}
