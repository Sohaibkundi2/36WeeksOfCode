AWS Basics for Frontend/Backend Deployment
1. S3 (Simple Storage Service)

- Think of it like a hard drive on the cloud.

- You can upload files (HTML, CSS, JS, images, videos).

- People can then access them via a link.

Perfect for static websites (like React, plain HTML, CSS).

 Example:
You build a React app → run npm run build → it gives you build/ folder → you upload to S3 bucket → boom, live website.

2. EC2 (Elastic Compute Cloud)

- Think of it like renting a computer/server from AWS.

- You can install Node.js, databases, APIs, or even run a full website.

- More flexible, but you have to manage updates, security, scaling.

 Example:
You want to deploy a Node.js backend API → you rent an EC2 server → install Node.js + your app → users access it.

3. CloudFront (CDN – Content Delivery Network)

- Think of it like AWS postmen placed all over the world.

- Instead of users loading your website from one server, they get it from the nearest location.

- Makes websites faster (low latency).

 Example:
If you upload your React app to S3, you can connect it to CloudFront → now people in the US, Europe, Asia load it from servers closest to them.

4. Route 53 (Domain Service)

Manages custom domains (sohaib.dev, myapp.com).

You buy/register a domain and connect it to your AWS service.

### How they work together (Frontend Example)

Upload your React app → S3 bucket.

Connect bucket to CloudFront → speed up delivery globally.

Buy domain in Route 53 (or connect GoDaddy/Namecheap).

Done → https://myapp.com live.

### How they work together (Backend Example)

Rent a server → EC2.

Install Node.js / Express backend.

Expose API to internet → https://api.myapp.com.

Optional: Put Load Balancer + Auto Scaling → if traffic increases.

✅ S3 → static websites (frontend).
✅ EC2 → full servers (backend).
✅ CloudFront → speed & global caching.
✅ Route 53 → domain names.
---

# Week 12.1 | Deploying Frontends on AWS

- S3 + CloudFront vs EC2

- S3 + CloudFront → Serverless, scalable, cheaper, good for static assets.

- EC2 → Full control, but costly and requires maintenance.

### Why CloudFront?

Global CDN → reduces latency, caches content closer to users.

### React app routing in S3?

Configure error document → index.html so all routes fallback to it.

## Week 12.2 | Advanced TypeScript APIs

- interface vs type

- interface → extendable, best for objects.

- type → more flexible, supports unions & intersections.

- Generics in API responses

- Example: ApiResponse<T> lets you reuse the same response structure for different data types.

### Enums for constants

- Example: enum Status { SUCCESS, ERROR } → ensures type safety for status codes.

## Week 12.3 | Deploying NPM Packages, Intro to Monorepos

- Breaking change update

- Increase major version (1.x.x → 2.0.0) following semver.

- Scoped packages

- Namespaced → avoids conflicts, good for orgs (@sohaib/utils).

### Monorepo pros & cons

- Easier dependency sharing, single repo for multiple projects.

- Can get huge, harder CI/CD.

## Week 12.4 | Actionable Docker

- Dockerfile vs docker-compose

Dockerfile → how to build one image.

docker-compose → run multiple containers together.

Multi-stage builds

Keep final image small by separating build stage and runtime.

Running frontend + backend

Define two services in docker-compose.yml (e.g., frontend and backend).

## Week 12.5 | SQL Relationships and Joins

### Relationships

- 1:1 → User ↔ Profile

- 1:N → User ↔ Posts

- N:M → Students ↔ Courses

- JOIN differences

- INNER → only matches

- LEFT → all left + matches

- RIGHT → all right + matches

- Junction table

- Required for N:M → Example: student_courses(student_id, course_id).

## Week 12.6 | Prisma Recap, Relationships In Prisma

- 1:N in schema
```
model User {
  posts Post[]
}
model Post {
  user   User @relation(fields: [userId], references: [id])
  userId Int
}
```

Cascade delete

Use onDelete: Cascade in schema.

include vs raw query

.findMany({ include }) → Prisma-managed relations.

$queryRaw → custom SQL, more control, but no Prisma typing.

## Week 12.7 | Connection Pooling in Serverless

### Why pooling?

Prevents exhausting DB connections when serverless functions scale.

### New connection per request?

Too many open connections → DB crashes or throttles.

Pooling tools

pgBouncer (Postgres), Prisma Data Proxy, PlanetScale (MySQL).