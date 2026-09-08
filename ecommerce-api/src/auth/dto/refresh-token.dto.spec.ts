import { refreshTokenSchema } from "./refresh-token.dto.js";
describe('RefreshTokenDto', () => {
  it('should be defined', () => {
    expect(refreshTokenSchema).toBeDefined();
  });
});
