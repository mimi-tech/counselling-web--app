
# Christ's Comfort (A Christian Counselling Web App)

Welcome to the Daily Bible Verses Web App! This project displays random Bible verses and allows users to view specific chapters from the Bible. It also features a blurred background image for a visually appealing interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [APIs Used](#apis-used)
- [License](#license)

## Features

- Display random Bible verses.
- Fetch and display specific chapters from the Bible.
- Counselling Section.
- Contact.
- Doctrines.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- Firebase (for Firestore)
- Bible API

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your machine.
- Firebase project setup with Firestore.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mimi-tech/counselling-web--app
   cd counselling-web--app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup Firebase:**

   - Create a Firebase project and Firestore database.
   - Update the `firebaseConfig.js` file with your Firebase configuration.

4. **Start the server:**

   ```bash
   npm start
   ```

5. **Open the app in your browser:**

   ```bash
   http://localhost:3001
   ```

## Usage

1. **Fetch and display random Bible verses:**
   - The app fetches random Bible verses from the Bible API and displays them on the page.

2. **View specific chapters:**
   - Pass the chapter name and number in the URL to fetch and display specific chapters from the Bible.

## Project Structure

```
daily-bible-verses/
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── firebaseConfig.js
├── views/
│   ├── include/
│   │   └── header.ejs
│   ├── index.ejs
│   ├── chapter.ejs
├── routes/
│   └── index.js
├── app.js
├── package.json
├── README.md
```

## APIs Used

- [Bible API](https://bible-api.com/): Used to fetch random Bible verses and specific chapters.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to modify this README to better fit your project's specifics and requirements.
