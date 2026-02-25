# Popcorn Pulse: CSR vs SSR Comparison

This project demonstrates the difference between **Client-Side Rendering (CSR)** and **Server-Side Rendering (SSR)** using two HTML files: `CSR.html` and `SSR.html`.

---

## Key Differences

| Feature         | CSR.html + CSR.js                | SSR.html                      |
|-----------------|----------------------------------|-------------------------------|
| Rendering       | Client-side (JS builds DOM)      | Server/static (HTML markup)   |
| Data location   | In `CSR.js` array                | Hardcoded in HTML             |
| SEO             | Less SEO-friendly                | SEO-friendly                  |
| First paint     | Slower (wait for JS)             | Fast (content in HTML)        |
| Maintainability | Easy (update JS array)           | Hard (update HTML manually)   |
| JS required     | Yes                              | No                            |

---

## Example: How Movies Are Rendered

- **CSR:**  
  The `movies` array in `CSR.js` is looped over to generate HTML for each movie card, which is then injected into the page.

- **SSR:**  
  Each movie card is written directly in the HTML file.

---



## Project Structure

## CSR (Client-Side Rendering)

- **File:** `CSR.html` (+ `CSR.js`)
- **How it works:**  
  The movie grid is rendered dynamically in the browser using JavaScript (`CSR.js`). The movies data is stored in a JavaScript array, and the DOM is populated at runtime.
- **Pros:**  
  - Easier to update movie data (single source of truth in JS)
  - Smaller initial HTML file
- **Cons:**  
  - Content is not visible until JavaScript loads and runs
  - Less SEO-friendly by default

---

## SSR (Server-Side Rendering / Static Rendering)

- **File:** `SSR.html`
- **How it works:**  
  The movie grid is pre-rendered in the HTML file. All movie cards are present in the HTML markup, so content is visible immediately on page load, even if JavaScript is disabled.
- **Pros:**  
  - Faster first contentful paint
  - Better for SEO and accessibility
  - Works without JavaScript
- **Cons:**  
  - Harder to maintain (movie data duplicated in HTML)
  - Larger HTML file

---



```
/Popcorn-Pulse
  ├── CSR.html
  ├── SSR.html
  ├── CSR.js
  ├──