import { createUserSchema } from './create-user.dto.js';

describe('createUserSchema', () => {
  const valid = {
    email: 'alice@example.com',
    password: 'password1',
    name: 'Alice',
  };

  it('accepts a valid payload', () => {
    expect(createUserSchema.parse(valid)).toEqual(valid);
  });

  it('accepts an optional role', () => {
    expect(
      createUserSchema.parse({ ...valid, role: 'ADMIN' as const }),
    ).toEqual({ ...valid, role: 'ADMIN' });
  });

  it('rejects an invalid email', () => {
    expect(() =>
      createUserSchema.parse({ ...valid, email: 'not-an-email' }),
    ).toThrow();
  });

  it('rejects a short password', () => {
    expect(() =>
      createUserSchema.parse({ ...valid, password: 'short' }),
    ).toThrow();
  });

  it('rejects unknown fields', () => {
    expect(() =>
      createUserSchema.parse({ ...valid, extra: true }),
    ).toThrow();
  });
});
