# Next.js

### 1. What are the differences between SSR, SSG, ISR, and CSR?

* **SSR (Server-Side Rendering)**: The page is generated on each request on the server. Good for dynamic data that changes often.
* **SSG (Static Site Generation)**: The page is built once at build time and reused. Good for content that doesn't change frequently.
* **ISR (Incremental Static Regeneration)**: Like SSG, but allows updating static pages after deployment, without a full rebuild.
* **CSR (Client-Side Rendering)**: The page loads basic HTML, then JavaScript runs in the browser to fetch and display data. Often used with useEffect().

### 2. How does file-based routing work in Next.js?

In Next.js, the routing system is based on the file structure inside the `pages/` or `app/` directories. Each file becomes a route:

* `pages/index.js` → `/`
* `pages/about.js` → `/about`
* `pages/blog/post.js` → `/blog/post`

You don’t need to configure a router manually.

### 3. How do API routes work in Next.js?

You can create backend API endpoints inside your Next.js app using files inside `pages/api` or `app/api`. Each file defines an HTTP handler:

```js
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello' });
}
```

In Next 13+, you can use route handlers:

```js
// app/api/hello/route.js
export async function GET() {
  return Response.json({ message: 'Hello' });
}
```

### 4. What are the differences between the pages/ and app/ directories?

| Feature           | pages/                   | app/ (Next 13+)      |
| ----------------- | ------------------------ | -------------------- |
| Routing           | File-based               | File-based           |
| Data fetching     | getServerSideProps, etc. | fetch(), async/await |
| Server components | Not supported            | Supported            |
| Layout system     | Manually handled         | Built-in layouts     |
| Parallel routes   | Not available            | Supported            |

### 5. How does dynamic routing work in Next.js?

You can create dynamic routes using square brackets in file names:

* `pages/post/[id].js` handles `/post/1`, `/post/abc`, etc.

Use `useRouter()` to access route parameters:

```js
const router = useRouter();
const { id } = router.query;
```

### 6. What are the pros and cons of using Next.js over Create React App (CRA)?

**Pros:**

* Built-in SSR, SSG, and ISR
* File-based routing
* API routes (backend)
* Optimized performance (automatic code splitting, image optimization)

**Cons:**

* Slightly more complex setup
* Learning curve with app router and server components

CRA is easier to start with but lacks advanced features.

### 7. How do you connect a database in a Next.js app?

Usually, database connections are done in API routes. Example using MongoDB:

```js
import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGO_URI);
};

export default async function handler(req, res) {
  await connectDB();
  const users = await User.find();
  res.status(200).json(users);
}
```

### 8. What is the role of middleware in Next.js?

Middleware runs before a request is completed. You can use it for:

* Authentication
* Redirects
* Logging

```js
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token');
  if (!token) return NextResponse.redirect('/login');
  return NextResponse.next();
}
```

### 9. What’s the difference between server components and client components?

* **Server Components** run on the server. They don’t include client-side JavaScript and can't use browser APIs like `useState` or `useEffect`.
* **Client Components** run in the browser. Use the `'use client'` directive to make a file client-side.

Server components reduce JS size and improve performance.

### 10. How is SEO handled in a Next.js application?

Next.js helps with SEO using:

* **Server-side rendering (SSR)**: Ensures search engines can read dynamic content.
* **Static generation (SSG)**: Pre-renders content for fast indexing.
* **Head management**: Use `next/head` to set title, description, meta tags.

```js
import Head from 'next/head';

<Head>
  <title>My Page</title>
  <meta name="description" content="Best app ever" />
</Head>
```
---
---
---

# BONUS 
---

- [click here to check my nextjs project](https://next-auth-app-nine-vert.vercel.app/)

