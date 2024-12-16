# Uprise Quiz State

This project is a **Quiz Web Application** designed to evaluate users in various skill sets. The app is built using **React** and includes core features like a Home screen, a Question screen, and a Report screen. The application follows a structured and scalable approach for state management and utilizes mock APIs for fetching quiz data.

## Features

- **Home Screen**: Start the quiz with a clean and intuitive UI.
- **Question Screen**: Answer quiz questions with real-time feedback.
- **Report Screen**: View your final score and performance analysis.
- **Custom REST API Schema**: Mock APIs for seamless data handling.
- **Responsive Design**: Optimized for all devices.
- **Clean Codebase**: Modular and maintainable code structure.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend (Mock APIs)**: Next.js or JSON Server
- **State Management**: React Context/Redux
- **Version Control**: Git & GitHub

## Installation

To set up the project locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your system:
- Node.js (>= 16.x)
- npm or yarn

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Manish50518/Uprise-Quiz-State.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Uprise-Quiz-State
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Project Structure

```plaintext
Uprise-Quiz-State/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Screens (Home, Quiz, Report)
│   ├── services/         # API handlers
│   ├── context/          # State management using Context API
│   ├── styles/           # Tailwind and custom CSS
│   └── utils/            # Helper functions
├── .gitignore            # Git ignore rules
├── package.json          # Project metadata and dependencies
├── README.md             # Documentation
└── ...
```

## REST API Schema

The app uses a mock API to fetch quiz data. Below is an example schema:

### Endpoint: `GET /api/questions`

#### Response:
```json
[
  {
    "id": 1,
    "question": "What is React?",
    "options": ["Library", "Framework", "Language", "Tool"],
    "answer": "Library"
  },
  {
    "id": 2,
    "question": "What is JSX?",
    "options": ["JavaScript XML", "Java Syntax", "JavaScript Extra", "None of these"],
    "answer": "JavaScript XML"
  }
]
```

### Endpoint: `POST /api/submit`

#### Request:
```json
{
  "userId": 123,
  "score": 80
}
```

#### Response:
```json
{
  "message": "Submission successful",
  "score": 80
}
```

## Deployment

This project can be deployed using any platform supporting React apps, such as **Vercel** or **Netlify**.

To deploy:
1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Deploy the contents of the `build/` folder.

## Contribution

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Feel free to share your feedback or raise issues in the [Issues](https://github.com/Manish50518/Uprise-Quiz-State/issues) section of this repository.

Happy Coding!
