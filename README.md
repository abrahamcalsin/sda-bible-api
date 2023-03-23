# SDA Bible - API

API for accessing the online Bible in the [Reina Valera Revisada 1960 (RVR1960) version.](<https://es.wikipedia.org/wiki/Reina-Valera#Reina-Valera_Revisada_1960_(RVR1960)>)

## Installation:

1. Clone the GitHub repository

   ```powershell
   git clone https://github.com/abrahamcalsin/sda-bible-api.git
   ```

   - You can also clone the repository using the GitHub CLI

   ```powershell
   gh repo clone abrahamcalsin/sda-bible-api
   ```

2. Install the project dependencies via pnpm, npm, or yarn by running one of the following commands

   ```powershell
   # Using pnpm
   pnpm install

   # Using npm
   npm install

   # Using yarn
   yarn install
   ```

3. Start the server

   ```powershell
   pnpm exec vercel dev
   ```

## Usage:

The API has the following endpoints available:

### GET /api/books

Get all the books from the Bible.

### > Query Parameters:

- ### GET /api/books/:bookName/chapters

  Get all the chapters from a book of the Bible.

  - Parameters:

  | Name        | Type   | Description                                   |
  | ----------- | ------ | --------------------------------------------- |
  | `:bookName` | string | Name of the book from the Bible (in Spanish). |

- ### GET /api/books/:bookName/chapters/:chapter/verses

  Get all the verses from a chapter of a book from the Bible.

  - Parameters:

  | Name        | Type   | Description                                   |
  | ----------- | ------ | --------------------------------------------- |
  | `:bookName` | string | Name of the book from the Bible (in Spanish). |
  | `:chapter`  | string | Number of the chapter to retrieve.            |

## Customization:

You can change the structure of the JSON data in the API, and you can also deploy this API on your own server using platforms like [Vercel.com](https://vercel.com/), [Railway.app](https://railway.app/), [Render.com](https://render.com/), etc.

## License:

This project is licensed under the GNU GPL License. See the [LICENSE.md](LICENSE) file for details.
