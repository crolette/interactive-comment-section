# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [To Do](#to-do)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot

![](./images/screenshot.jpg)

### Links

- [Solution URL](https://github.com/crolette/interactive-comment-section)
- [Live Site URL](https://crolette.github.io/interactive-comment-section/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SVG: use of sprite with symbol
- Javascript Modules

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

#### Symbol in SVG / Sprite

To see how you can add code snippets, see below:
Use <symbol> in one SVG to avoid having the detailed SVG each time

SVG File

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xml:space="preserve"
>
  <symbol id="delete" viewBox="0 0 63 80.5">
    <g>
      <path
        fill="currentColor"
        d="M1.3,19.3L1.3,19.3L4.6,22v52.2c0,2.6,2.1,4.6,4.6,4.6h44.1c2.6,0,4.6-2.1,4.6-4.6V22l3.3-2.8h0v-4.6H1.3
            V19.3z M41.8,26.5h5.6v44.9h-5.6V26.5z M28.5,26.5h5.6v44.9h-5.6V26.5z M15.2,26.5h5.6v44.9h-5.6V26.5z"
      />
      <path
        fill="currentColor"
        d="M60.3,8.1H40.8V3.5c0-1-0.8-1.9-1.9-1.9H23.7c-1,0-1.9,0.8-1.9,1.9v4.6H2.3c-0.6,0-1.1,0.5-1.1,1.1v3.6
            h60.2V9.2C61.4,8.6,60.9,8.1,60.3,8.1z M37.3,7h-12V5.7c0-0.3,0.3-0.6,0.6-0.6h10.8c0.3,0,0.6,0.3,0.6,0.6V7z"
      />
    </g>
  </symbol>
</svg>
```

HTML Code

```html
<svg>
<use href="./images/icons.svg#delete">
</svg>
```

#### Center an element with absolute/transform

```css
body {
  position: relative;

  & .comment__modale {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [CSS Trick - Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - A complete Guide to CSS grid. Very helpful to understand how each Grid property works.

## Author

- [Crolweb - Website](https://www.crolweb.be)
- [Crolweb - Github](https://github.com/crolette)
- [@crolette - Frontend Mentor](https://www.frontendmentor.io/profile/crolette)

## To Improve

### Styles

- improve responsiveness

### To Do

- Edit comment

JS:

- fetch JSON
- create page with current data
- on reply, add new comment
- objects with each specific code snippet
