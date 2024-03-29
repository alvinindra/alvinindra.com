---
title: "Elevate Your Presentations with Slidev: Presentation Slides for Developers"
date: 2023-01-23
---
# Elevate Your Presentations with Slidev: Presentation Slides for Developers
As a developer we need to present our work to the client, therefore I'm experimenting with how to make slides that are more engaging based on my experience as a Front-end Developer. So let's get started!
Source: https://sli.dev/What is Slidev?

Slidev or we can pronounce it (slide + dev, /slʌɪdɪv/) is a web-based slides maker and presenter. It's designed for developers to focus on writing content in Markdown while also having the power of HTML and Vue components to deliver pixel-perfect layouts and designs with embedded interactive demos in your presentations.

It uses a feature-rich markdown file to generate beautiful slides with an instant reloading experience, along with many built-in integrations such as live coding, PDF exporting, presentation recording, and so on. Since it's powered by the web, you can do anything with Slidev - the possibilities are endless.

## Why Slidev?

There are a lot of feature-rich, general-purpose, WYSIWYG slide makers like Microsoft PowerPoint and Apple Keynote. They work pretty well for making nice slides with animations, charts, and many other things while being very intuitive and easy to learn. So why use Slidev?

* Slidev aims to provide flexibility and interactivity for developers to make their presentations even more interesting, expressive, and attractive by using the tools and technologies they are already familiar with.

* We can use Tech Stack like (Vue.js, Windicss, UnoCSS, and others)

* Efficiency: With markdown, you can create slides quickly and efficiently without the need for complex formatting or layout options.
* Collaboration: Markdown is a plain text format, which means it can be easily shared and edited by multiple people using any text editor.
* Version control: Because Markdown is a plain text format, it can be easily tracked and managed using version control systems like Git.
* Portability: Slides created with Slidev and markdown can be easily converted into other formats (such as PDF or HTML) for sharing or presentation.

Overall, Slidev and markdown can be good choices for creating simple and interesting slides, especially if you are working on a team or need to manage changes to your slides over time.

## Getting Started
If you want to try this without manual setup, you can try it online with: sli.dev/new

But, I will try this in manual setup for local
Installation
with NPM:
```shell
npm init slidev
```
with Yarn:
```shell
yarn create slidev
```

After npm init slidev, you can type your project name and choose to install with package (npm, yarn or pnpm), in my case I use npm.

## Command Line Interface
In a project where Slidev is installed, you can use the slidev binary in your npm scripts.
```json
{
  "scripts": {
    "dev": "slidev", // start dev server
    "build": "slidev build", // build for production SPA
    "export": "slidev export" // export slides to pdf
  }
}
```
After npm run dev or installation you will see the local slide show.

Go to http://localhost:3030/ and boom! the slide show is ready.
## Edit the slides

The first thing you need to do is to enter the slides.md file located in the root project directory.

# Welcome to Slidev
Presentation slides for developers
```vue
<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>
```

Beforehand, if you do not have experience in writing markdown, you can learn it here: [syntax guide](https://sli.dev/guide/syntax.html).
## Deploy
Of course! This project can be deployed because it is web-based. To deploy the project, you can use static hosting and build the slides into a single-page application (SPA) that can be self-hosted. Build the slides into a self-hostable SPA:
```shell
npm run build
```
The generated application will be available under dist/ and then you can host it on GitHub Pages, Netlify, Vercel, or whatever you want. Now you can share your slides with the rest of the world with a single link.

* Deploy example: https://slidev-presentation.netlify.app
* GitHub: https://github.com/alvinindra/slidev-presentation
* Slidev: https://sli.dev/

## Conclusion

Slidev is a powerful and user-friendly presentation tool that is well-suited for developers. Its wide range of features and customization options make it easy to create professional-grade slides that will engage and impress your audience. Whether you're giving a technical talk or presenting project updates, Slidev has the tools you need to take your presentations to the next level. Give it a try and see how it can elevate your presentations.