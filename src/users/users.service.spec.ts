import { Test, TestingModule } from '@nestjs/testing';
import { User } from '@prisma/client';
import { CreateOneUserArgs } from '../../src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { UsersModule } from './users.module';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let repository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<UsersRepository>(UsersRepository);
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const userCreateInput: CreateOneUserArgs = {
        data: {
          name: 'John Doe',
          password: 'password',
          email: 'john.doe@email.com',
          authority: 'FIRST',
          createdAt: '2022-04-01 15:08:09.703',
          updatedAt: '2022-04-01 15:08:09.703',
        },
      };
      const userCreateReturn: User = {
        id: 1,
        name: 'John Doe',
        password: 'password',
        email: 'john.doe@email.com',
        authority: 'FIRST',
        hashedRefreshToken: null,
        createdAt: new Date('2022-04-01 15:08:09.703'),
        updatedAt: new Date('2022-04-01 15:08:09.703'),
      };
      const mock = jest
        .spyOn(repository, 'createUser')
        .mockImplementation(() => Promise.resolve(userCreateReturn));
      const newUser = await service.createUser(userCreateInput);
      // mockがInputで呼び出されている
      expect(mock).toHaveBeenCalledWith(userCreateInput);
      // createUserの返り値を確認
      expect(newUser).toMatchObject(userCreateReturn);
    });
  });
  // describe('findAll', () => {
  //   it('should find all customers', async () => {
  //     const customers = [
  //       {
  //         id: '1234',
  //         name: 'John Doe',
  //         email: 'john.doe@email.com',
  //         phone: '3134045867',
  //         address: '123 Road, Springfied, MO',
  //       },

  //       {
  //         id: '5678',
  //         name: 'John Ford',
  //         email: 'john.ford@email.com',
  //         phone: '3134045867',
  //         address: '456 Road, Springfied, MO',
  //       },
  //     ];
  //     customerRepositoryMock.find.mockReturnValue(customers);
  //     const foundCustomers = await service.findAll();
  //     expect(foundCustomers).toContainEqual({
  //       id: '1234',
  //       name: 'John Doe',
  //       email: 'john.doe@email.com',
  //       phone: '3134045867',
  //       address: '123 Road, Springfied, MO',
  //     });
  //     expect(customerRepositoryMock.find).toHaveBeenCalled();
  //   });
  // });
  // describe('findOne', () => {
  //   it('should find a customer', async () => {
  //     const customer = {
  //       id: '1234',
  //       name: 'John Doe',
  //       email: 'john.doe@email.com',
  //       phone: '3134045867',
  //       address: '123 Road, Springfied, MO',
  //     };
  //     customerRepositoryMock.findOne.mockReturnValue(customer);
  //     const foundCustomer = await service.findOne(customer.id);
  //     expect(foundCustomer).toMatchObject(customer);
  //     expect(customerRepositoryMock.findOne).toHaveBeenCalledWith(customer.id);
  //   });
  // });
});
