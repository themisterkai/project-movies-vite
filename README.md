<h1 align="center">
  <a href="">
    <img src="/src/assets/movies.svg" alt="Project Banner Image">
  </a>
</h1>

# Movie Site Project

This is a project made using React. Data is pulled from the API of [themoviedb.org](themoviedb.org)

### Dependency Installation & Startup Development Server

```bash
npm i && code . && npm run dev
```

### Description

This project has implemented all the basic requirements as well as the intermediate and advanced stretch goals.

- The app follows the design
- The app adapts to the different viewports
- We show a 'not found' page when the user tries to access a page with an invalid movie id or invalid actor id. It will also show this for a random URL.
- We show a 'loading' page while we wait for the API pull to complete.
- On the homepage, the user can select between popular, top-rated, and upcoming movies. I chose to display this as links instead of a dropdown because it looks better.
- Added the actor information for the movies (using a different API route), which when clicked, will take us to a new page about the actor filmography.

### View it live

[https://kai-movies.netlify.app/](https://kai-movies.netlify.app/)
