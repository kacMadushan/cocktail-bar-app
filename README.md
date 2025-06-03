This application design and developing in using Next Js -  [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). 

## Overview
This solution outlines the implementation of a cocktail-themed web application with three primary features: Home, Search, and Favourites.

#### Home: 
The home page will display a set of 5 random cocktails, each showing the cocktail's name, image, and category. To ensure variety, 5 random cocktails will be fetched by calling the random cocktail API five times, ensuring no duplicates are shown. A "Shake Cocktail" button will be provided, enabling users to load a fresh set of 5 unique cocktails with each click.

#### Search: 
Users will be able to search for cocktails by name, with the flexibility for partial search functionality. The search results will display the cocktail name, image, and an "Add" button. When clicked, the "Add To Favourite" button will save the selected cocktail to an in-memory favourites list, allowing users to create a personalized list of cocktails.

#### Favourites: 
The favourites feature will display a list of cocktails that the user has added to their favourites. Each cocktail in the favourites list will show the name, image, and a "Remove" button. The "Remove" button will allow users to remove cocktails from the favourites list, enabling them to manage their collection of preferred cocktails.

Overall, this solution creates an interactive and engaging experience for users to explore, search, and manage their favourite cocktails in a simple and user-friendly interface.

## Tech Stack
    - Next.js
    - TypeScript
    - Motion Js - (animations lib)
    - TailwindCSS
    - Tailwind-merge
    - Clsx
    - Class Variance Authority
    - Axios
    - React Icons
    - Lucide React

Using eslint dependencies:
    - eslint-plugin-tailwindcss
    - eslint-plugin-simple-import-sort

## Quick Start

Follow these steps to set up the project locally on your machine.

#### Prerequisites

Make sure you have the following installed on your machine:
    - Git
    - Node Js
    - npm (Node Package Manager)


Create folder cocktail-bar-app or whatever you like, and unzip the cocktail-bar zip file and then go to project path in cmd.

#### Installation

Install the project dependencies using npm:

```bash
npm install
```

#### Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:

    NEXT_PUBLIC_API_URL=https://www.thecocktaildb.com/api - (Set API URL)

#### Running the Project

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the project.

