-- 1. Tạo enum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'MANAGER');

-- 2. Xóa default cũ
ALTER TABLE "user"
ALTER COLUMN "role" DROP DEFAULT;

-- 3. Convert dữ liệu hiện tại
ALTER TABLE "user"
ALTER COLUMN "role" TYPE "Role"
USING "role"::text::"Role";

-- 4. Set lại default bằng enum
ALTER TABLE "user"
ALTER COLUMN "role" SET DEFAULT 'USER';