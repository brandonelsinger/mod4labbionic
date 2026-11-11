# Ionic Vue — Hello World

This project provides a working starting point for our mobile application using Ionic, Vue, and TypeScript.

## What we accomplished

- Created the application using Ionic’s blank Vue starter.
- Updated the home page to display “Hello, world!”.
- Ran the application locally in a browser.

The three functional tabs are planned for the next development phase.

## Getting started (10–15 minutes)

### Prerequisites

- A current Node.js LTS version, including npm.
- Rider or another editor.
- A copy of this repository.

Check that Node.js and npm are available:

```sh
node --version
npm --version
```

### 1. Open the application folder

Open the cloned repository folder in your editor. Run all commands from the repo's root folder—the one containing `package.json`.

> **Round 2 note:** An earlier version of this README said to `cd hello-world`. There is no `hello-world` subfolder; `package.json` is at the root of the repo.

### 2. Install dependencies

```sh
npm ci
```

This installs the dependency versions recorded in `package-lock.json`.

### 3. Start the application

```sh
npx @ionic/cli serve
```

Accept the prompt to install `@ionic/cli` if it appears.

Open the local address printed in the terminal if the browser does not open automatically. You should see the Hello World page. *(Round 2: the app now opens on the BMI tab.)*

Leave the terminal running while developing. Saved changes reload in the browser. Press Ctrl+C to stop the server.

## Where to start editing

- `src/views/HomePage.vue` — current home page, including its content and styles. *(Round 2: no longer used; see the tab pages listed in the Round 2 section.)*
- `src/App.vue` — root application component.
- `src/router/` — page routing.
- `package.json` — dependencies and development commands.

## Next development phase

The next developer will add three functional tabs:

1. **BMI Calculator:** Enter height and weight, calculate BMI, and display the corresponding category.
2. **Morse Code Translator:** Enter text and convert it into dots and dashes.
3. **When Can I Buy Alcohol?:** Enter a date of birth and select a jurisdiction to determine when the user reaches the legal purchasing age.

✅ **All three features were completed in Round 2.** See the Round 2 section below.

## Troubleshooting

- **“Can only be run in an Ionic project directory”:** Make sure your terminal is in the repo's root folder, where `ionic.config.json` is located.
- **Prompt to install `ionic@5.4.16`:** Cancel and use `npx @ionic/cli serve`, including `@ionic/cli`.
- **Missing dependencies:** Run `npm ci` from the application folder.

---

## Round 2 Updates

### What we added
- **Tab navigation:** a bottom tab bar with three tabs (`src/views/TabsPage.vue`), and routes updated in `src/router/index.ts`. The app now opens on the BMI tab. `HomePage.vue` is no longer used.
- **BMI Calculator** (`src/views/BmiPage.vue`)
  - Enter weight (lbs) and height (inches). Formula: `(weight × 703) / height²`
  - Shows the BMI to one decimal place and its category: Underweight (< 18.5), Normal weight (18.5–24.9), Overweight (25–29.9), Obese (30+)
  - Blank or zero values show an error message.
- **Morse Code Translator** (`src/views/MorsePage.vue`)
  - Converts text into dots and dashes. Letters are separated by a space, and words by ` / `.
  - Supports A–Z in upper or lower case. Other characters show as `?`.
- **When Can I Buy Alcohol?** (`src/views/AlcoholPage.vue`)
  - Pick a country and a date of birth. Shows your age and either "Cheers!" or the days left and the exact date you'll be of age.
  - Countries: United States (21), United Kingdom (18), Japan (20), Cuba (16)
  - Checks for a missing country, a missing date and a future birthday.

### Notes for the next team (Round 3)
- All three required features are complete and tested.
- **To add a 4th tab (Quiz):**
  1. Create `src/views/QuizPage.vue`.
  2. Add `{ path: 'quiz', component: QuizPage }` to the `children` array in `src/router/index.ts`, and import the page at the top.
  3. Add an `<ion-tab-button tab="quiz" href="/tabs/quiz">` in `TabsPage.vue`.
- Every `ion-` tag used in a page's `<template>` must also be imported in its `<script setup>`. Otherwise it won't render.
- The alcohol page builds dates from the year, month and day by hand, because `new Date("YYYY-MM-DD")` can come out one day early in US time zones.
