# 🧠 WEEK 00 – Deep Dive & Why It Matters

## ✅ HTML Basics
1. Semantic Tags.

What:\
Tags that give meaning to your content.
Examples: 
```html 
<header>, <section>, <article>, <footer><br/> etc 
```

Why we use it:

- Makes your code accessible (important for users using screen readers)

- Better SEO (Google understands your structure)

```html
<header>
  <h1>My Portfolio</h1>
</header>
<main>
  <section>
    <h2>About Me</h2>
    <p>I’m a frontend dev who loves clean code.</p>
  </section>
</main>
```
## 2. Forms
What:\
 User input fields (input, textarea, checkbox etc.)

Why we use it:

- Almost every app has a login form, signup, search bar, or comment box.

- You’ll often handle forms in React too.
```html
<form action="/submit">
  <label >Name:</label>
  <input type="text" name="name" />
  <button type="submit">Send</button>
</form>
```

## 3. Tables
What:  **Used to display data.**

Why its used: In dashboards or admin panels, tables are everywhere.

```html
<table>
  <tr>
    <th>Name</th><th>Role</th>
  </tr>
  <tr>
    <td>Sohaib</td><td>Frontend Developer</td>
  </tr>
</table>
```

## 4. Media (Images/Videos/Audio)
```html
<img src="profile.jpg" alt="My Photo" />
<video src="intro.mp4" controls></video>
<audio src="here-will-path"></audio>
```
## 5. Meta Tags & SEO
These go inside ```<head>```

```html
<meta name="description" content="Sohaib's 36-week coding journey" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
- Helps with page ranking, responsive design, and better previews.
---

# ✅ CSS Basics
## 1. Box Model
Every element is like a box:
margin -> border -> padding -> content
```css
.card {
  padding: 20px;
  border: 2px solid #ccc;
  margin: 10px;
}
```
-   Understanding the layout with margin, padding, border, and content areas.
- We Debug layouts with this concept.

## 2. Display Types
- Block: takes full width (div)

- Inline: takes only required space (span)

- Inline-block: inline but supports height/width
## 3. Flexbox
-   Aligning elements efficiently using `display: flex`, `justify-content`, `align-items`, etc.
- 🛠 Used everywhere in real UI layouts.

```html
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```
## 4. Grid
- Used for layouts like landing pages, admin dashboards, also used for input field of form and cards etc.
```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```
## 5. Animation & Transition
```css
.box {
  transition: all 0.3s ease;
  transform: scale(1.1);
}
```
- 🎯 Adds polish. Recruiters notice smooth UI.
- Used to make user engaged
- More Examples are in index.html file
---
## 6. Position 
  
  Understanding `static`, `relative`, `absolute`, `fixed`, and `sticky` positioning.
  
## 7. Media Queries
```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```
- 🧪 Makes your site responsive – for all screen devices


## 🔗 Resources

- [HTML Tutorial – MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Basics – MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS Animations – MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)



👨‍💻 _By Sohaib | Week 00 | #36WeeksOfCode_


