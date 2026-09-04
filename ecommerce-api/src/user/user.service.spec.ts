import { Test, TestingModule } from '@nestjs/testing';
import { UserRepository } from './user.repository.js';
import { UserService } from './user.service.js';
import type { User } from './user.types.js';

const user: User = {
  id: '11111111-1111-1111-1111-111111111111',
  email: 'alice@example.com',
  password: 'hashed',
  name: 'Alice',
  role: 'USER',
  createdAt: {} as User['createdAt'],
  updatedAt: {} as User['updatedAt'],
};

describe('UserService', () => {
  let service: UserService;
  const users = {
    create: vi.fn(),
    findById: vi.fn(),
    findByEmail: vi.fn(),
  };

  beforeEach(async () => {
    vi.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, { provide: UserRepository, useValue: users }],
    }).compile();

    service = module.get(UserService);
  });

  it('creates a user through the repository', async () => {
    users.create.mockResolvedValue(user);

    const created = await service.create({
      email: user.email,
      password: user.password,
      name: user.name,
    });

    expect(users.create).toHaveBeenCalledWith({
      email: user.email,
      password: user.password,
      name: user.name,
    });
    expect(created).toEqual(user);
  });

  it('finds a user by id', async () => {
    users.findById.mockResolvedValue(user);

    await expect(service.findById(user.id)).resolves.toEqual(user);
    expect(users.findById).toHaveBeenCalledWith(user.id);
  });

  it('finds a user by email', async () => {
    users.findByEmail.mockResolvedValue(user);

    await expect(service.findByEmail(user.email)).resolves.toEqual(user);
    expect(users.findByEmail).toHaveBeenCalledWith(user.email);
  });
});
