# Week-07
# 📦 Week 07 – State Management in React

## 🗓 Topics Covered

### ✅ Week 7.1 — Prop Drilling & Context API
- **Prop Drilling**: Passing data from parent to child, even if it's not needed at every level.
- **Problem**: Becomes messy and hard to manage in large apps.
- **Context API**:
  - Helps share global data (like theme, user info) without prop drilling.
  - Uses `createContext`, `Provider`, and `useContext`.

### ✅ Week 7.2 — Context API & Recoil
- **Limitations of Context API**:
  - Not great for frequent updates or many different pieces of state.
- **Recoil Introduction**:
  - A state management library made for React.
  - Uses **atoms** (state units) and **selectors** (derived/computed state).
  - Great for scalable and fast state management.

### ✅ Week 7.3 — Recoil Deep Dive
- **Selectors**:
  - Compute values from atoms (like uppercase name).
- **Async Selectors**:
  - Fetch data from APIs (e.g. user profile, todos).
- **Recoil Dev Tools**:
  - Helps debug your state.
- Learn about:
  - `useRecoilState`
  - `useRecoilValue`
  - `useSetRecoilState`
  - `atom effects` (e.g. syncing with localStorage)

---

## 🛠 Mini Project: User Dashboard

### 🎯 Features:
- View and update user profile
- Toggle dark/light theme
- Practice prop drilling, then refactor with Context API and Recoil

### 💡 Learning Outcome:
- Understand the need for state management tools
- Build scalable apps without passing props everywhere

---

## 📚 Bonus: What's TanStack?

- A collection of powerful tools for React:
  - **TanStack Query (React Query)** → Data fetching & caching
  - **TanStack Table** → Dynamic tables
  - **TanStack Router** → Lightweight routing
- Helps you manage server state (not component state)

---

