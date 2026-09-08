<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Observability

In production applications, observability is essential for understanding how your system behaves, detecting issues early, and maintaining reliable performance.

[NestJS Observe](https://observe.nestjs.com) automatically instruments your NestJS application, giving you deep visibility into your system with minimal setup:

- **Distributed tracing:** Follow requests across services and understand how they flow through your system.
- **Waterfall analysis:** Visualize request execution and identify slow operations, bottlenecks, and unexpected delays.
- **Performance analysis:** Analyze application performance in real time and quickly pinpoint areas that need optimization.
- **Metrics:** Track key application and infrastructure metrics to understand system health and performance trends.
- **Logging:** Centralize and correlate logs with traces and other telemetry to make debugging easier.
- **Error tracking:** Detect errors quickly and investigate their root causes with the surrounding context.
- **SLA monitoring:** Track service-level objectives and identify when your application is approaching or exceeding defined thresholds.
- **Alarms and alerts:** Set up alerts for critical errors, performance degradation, SLA violations, and other anomalies so your team can react quickly.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Auto-instrument your application with [NestJS Observer](https://observer.nestjs.com). Distributed tracing, metrics, and logging made easy. Error tracking and performance monitoring for your NestJS applications.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
Được. Nếu làm project **E-commerce Backend NestJS** để phục vụ cả học kiến thức và phỏng vấn, mình sẽ chia thành các task nhỏ theo thứ tự **từ dễ → khó → production**.

## Phase 1 — Khởi tạo project

### Task 1: Tạo NestJS project

* [ ] `nest new ecommerce-api`
* [ ] Setup TypeScript
* [ ] Setup ESLint / Prettier
* [ ] Tạo `.env`
* [ ] Tạo `.env.example`

### Task 2: Docker

* [ ] Tạo `Dockerfile`
* [ ] Tạo `docker-compose.yml`
* [ ] PostgreSQL container
* [ ] Redis container
* [ ] Test `docker compose up`

### Task 3: Prisma + PostgreSQL

* [ ] Install Prisma
* [ ] Configure `DATABASE_URL`
* [ ] `schema.prisma`
* [ ] PrismaService
* [ ] Migration đầu tiên

---

<!-- 1. Sửa prisma/contract.prisma
             ↓
2. npx prisma contract emit
             ↓
3. npx prisma migration plan --name xxx
             ↓
4. Review migration.ts
             ↓
5. npx prisma db migrate
             ↓
6. NestJS sử dụng Prisma 8 runtime -->

# Phase 2 — User & Authentication

### Task 4: User model

```text
User
├── id
├── email
├── password
├── name
├── role
├── createdAt
└── updatedAt
```

* [ ] Prisma model
* [ ] Migration
* [ ] User module
* [ ] User service
* [ ] User repository/data access

### Task 5: Register

```text
POST /auth/register
```

* [ ] DTO
* [ ] Validation
* [ ] Check email tồn tại
* [ ] Hash password
* [ ] Create user
* [ ] Error handling

### Task 6: Login

```text
POST /auth/login
```

* [ ] Verify email/password
* [ ] Generate JWT
* [ ] Return access token

### Task 7: Authentication Guard

* [ ] JWT strategy
* [ ] `JwtAuthGuard`
* [ ] `@CurrentUser()`
* [ ] Protect API

```text
Request
 ↓
JwtAuthGuard
 ↓
JWT valid?
 ↓
Controller
```

### Task 8: Refresh Token

```text
POST /auth/refresh
POST /auth/logout
```

* [ ] Refresh token

Access Token hết hạn
        │
        ▼
API trả 401
        │
        ▼
Client gọi /auth/refresh-token
        │
        │ refreshToken
        ▼
SHA-256(refreshToken)
        │
        ▼
Tìm RefreshToken trong DB
        │
        ├── Không có → 401
        │
        ├── revoked → 401
        │
        ├── expired → 401
        │
        ▼
     hợp lệ
        │
        ▼
Tạo Access Token mới
        │
        ▼
Client tiếp tục gọi API

* [ ] Store token/session
* [ ] Token rotation
* [ ] Logout/revoke

---

# Phase 3 — Authorization

### Task 9: Role

```text
USER
ADMIN
```

* [ ] Role enum
* [ ] `@Roles()`
* [ ] RolesGuard

Ví dụ:

```text
POST /products
        ↓
JWT Guard
        ↓
Roles Guard
        ↓
ADMIN?
```

---

# Phase 4 — Product

### Task 10: Category

```text
Category
├── id
├── name
└── slug
```

API:

```text
POST   /categories
GET    /categories
PATCH  /categories/:id
DELETE /categories/:id
```

### Task 11: Product

```text
Product
├── id
├── name
├── description
├── price
├── stock
├── categoryId
└── createdAt
```

API:

```text
POST   /products
GET    /products
GET    /products/:id
PATCH  /products/:id
DELETE /products/:id
```

### Task 12: Pagination

```text
GET /products?page=1&limit=20
```

Học:

* `LIMIT`
* `OFFSET`
* Cursor pagination

### Task 13: Filter / Sort

```text
GET /products?category=phone
GET /products?minPrice=100&maxPrice=500
GET /products?sort=price_desc
```

### Task 14: Search

```text
GET /products?search=iphone
```

Học:

* `LIKE`
* PostgreSQL Full Text Search
* Index

---

# Phase 5 — Redis

### Task 15: Redis connection

* [ ] RedisModule
* [ ] RedisService
* [ ] Test GET/SET

### Task 16: Product cache

```text
GET /products/123
       ↓
    Redis?
    /   \
 HIT    MISS
  ↓       ↓
Return   PostgreSQL
          ↓
        Redis
```

### Task 17: Cache invalidation

Khi:

```text
PATCH /products/123
```

phải xử lý:

```text
Database update
      ↓
Invalidate Redis
```

Học:

> **Cache invalidation**

---

# Phase 6 — Cart

### Task 18: Cart

```text
Cart
├── id
└── userId
```

### Task 19: Cart Item

```text
CartItem
├── id
├── cartId
├── productId
└── quantity
```

API:

```text
GET    /cart
POST   /cart/items
PATCH  /cart/items/:id
DELETE /cart/items/:id
```

### Task 20: Validate stock

Ví dụ:

```text
Product stock = 5

User add quantity = 10

→ Reject
```

---

# Phase 7 — Order + Transaction

Đây là **phase rất quan trọng cho Backend interview**.

### Task 21: Order model

```text
Order
├── id
├── userId
├── total
├── status
└── createdAt
```

### Task 22: Order Item

```text
OrderItem
├── id
├── orderId
├── productId
├── quantity
└── price
```

### Task 23: Create Order

```text
POST /orders
```

Flow:

```text
Cart
 ↓
Validate products
 ↓
Check stock
 ↓
Create Order
 ↓
Create OrderItems
 ↓
Decrease stock
 ↓
Clear Cart
```

Tất cả phải nằm trong **database transaction**.

### Task 24: Concurrency

Hai user cùng mua sản phẩm:

```text
Stock = 1

User A ──┐
         ├── Buy product
User B ──┘
```

Phải đảm bảo không xảy ra:

```text
Stock = -1
```

Học:

* Transaction
* Row locking
* Race condition
* Isolation level

---

# Phase 8 — Payment

### Task 25: Payment

```text
Order
 ↓
Payment
 ↓
SUCCESS / FAILED
```

### Task 26: Payment webhook

```text
Payment Provider
       ↓
Webhook
       ↓
NestJS
       ↓
Update Order
```

Học:

> **Idempotency**

Nếu webhook gửi 2 lần:

```text
Webhook A
Webhook A
```

không được charge/order update 2 lần.

---

# Phase 9 — Queue

### Task 27: SQS/RabbitMQ

Sau khi order thành công:

```text
Create Order
    ↓
Publish Event
    ↓
Queue
```

### Task 28: Email Worker

```text
Queue
 ↓
Worker
 ↓
Send Email
```

API không phải chờ email:

```text
Client
 ↓
POST /orders
 ↓
Order created
 ↓
Response 201
```

Email chạy background.

### Task 29: Retry

Nếu email fail:

```text
Worker
 ↓
Failed
 ↓
Retry
 ↓
Retry
 ↓
Dead Letter Queue
```

Học:

* Retry
* DLQ
* Backoff
* Idempotency

---

# Phase 10 — File Upload

### Task 30: Upload product image

```text
POST /products/:id/images
```

Flow:

```text
Client
 ↓
NestJS
 ↓
S3
 ↓
image URL
 ↓
PostgreSQL
```

Không lưu binary image vào PostgreSQL.

---

# Phase 11 — Logging & Error Handling

### Task 31: Global Exception Filter

```text
Controller
 ↓
Service
 ↓
Exception
 ↓
Global Exception Filter
 ↓
Standard response
```

### Task 32: Logging

Log:

```text
requestId
userId
method
path
statusCode
duration
error
```

Ví dụ:

```text
[requestId=abc123]
POST /orders
userId=100
status=201
duration=120ms
```

---

# Phase 12 — Testing

### Task 33: Unit Test

Test:

```text
AuthService
ProductService
OrderService
```

### Task 34: Integration Test

Test:

```text
NestJS
 ↓
PostgreSQL
```

### Task 35: E2E Test

```text
POST /auth/register
       ↓
POST /auth/login
       ↓
POST /orders
       ↓
GET /orders/:id
```

---

# Phase 13 — Security

### Task 36: API Security

* [ ] Helmet
* [ ] CORS
* [ ] Rate limiting
* [ ] Input validation
* [ ] SQL injection protection
* [ ] Password hashing
* [ ] JWT security

### Task 37: Secrets

Không commit:

```text
DATABASE_URL
JWT_SECRET
AWS_ACCESS_KEY
```

Dùng:

```text
.env
AWS Secrets Manager
```

---

# Phase 14 — Production

### Task 38: Docker production

```text
Dockerfile
docker-compose
production config
```

### Task 39: AWS Deploy

```text
                    AWS
                     │
                    ALB
                     │
              ┌──────┴──────┐
              │              │
             EC2            EC2
              │              │
              └── NestJS ───┘
                     │
        ┌────────────┼────────────┐
        ↓            ↓            ↓
       RDS        Redis          S3
        │
       SQS
```

### Task 40: Monitoring

* [ ] CloudWatch
* [ ] Application logs
* [ ] Error metrics
* [ ] CPU / Memory
* [ ] API latency
* [ ] Health check

```text
GET /health
```

---

# 🎯 Thứ tự nên làm

Đừng làm 40 task cùng lúc. Chia thành milestone:

```text
M1
├── NestJS
├── Docker
├── PostgreSQL
└── Prisma

M2
├── User
├── Register
├── Login
├── JWT
└── RBAC

M3
├── Category
├── Product
├── Pagination
├── Filter
└── Search

M4
├── Redis
└── Cache

M5
├── Cart
├── Order
├── Transaction
└── Concurrency

M6
├── Payment
├── Webhook
└── Idempotency

M7
├── Queue
├── Worker
├── Retry
└── DLQ

M8
├── S3
├── Testing
└── Security

M9
├── Docker Production
├── AWS
└── Monitoring
```

**Nếu mục tiêu chính của bạn là phỏng vấn Backend**, mình đề xuất bắt đầu từ **M1 → M5** trước. Đặc biệt `Order + Transaction + Concurrency + Redis` sẽ giúp bạn có rất nhiều câu hỏi thực tế để luyện phỏng vấn.
