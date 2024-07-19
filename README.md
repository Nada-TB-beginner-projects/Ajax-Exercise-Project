# Ajax Exercise Project

A simple web application demonstrating the use of Ajax to fetch and display different types of content (HTML, JSON, movies) using vanilla JavaScript. This project is part of a BootCamp exercise.

## Table of Contents

- [Demo](#demo)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Challenges and Learnings](#challenges-and-learnings)
- [Future Improvements](#future-improvements)
- [Contact](#contact)
- [License](#license)

## Demo
no demo 

## Requirements

- A modern web browser (Chrome, Firefox, Edge, Safari)
- PHP server (for fetching PHP files)

## Installation
To run the project locally using WAMP or XAMPP, follow these steps:

Download and Install WAMP or XAMPP:

WAMP
XAMPP
Clone the repository:

```bash
Copier le code
git clone https://github.com/Nada-TB-beginner-projects/Ajax-Exercise-Project.git
```
Move the Project to the Web Server Directory:

For WAMP, move the project folder to C:\wamp64\www\ajax-exercise-project
For XAMPP, move the project folder to C:\xampp\htdocs\ajax-exercise-project

Start the WAMP or XAMPP Server:

Open the WAMP or XAMPP control panel.
Start the Apache server.
Access the Project in Your Web Browser:

For WAMP, navigate to http://localhost/ajax-exercise-project
For XAMPP, navigate to http://localhost/ajax-exercise-project

## Usage

1. **Choose a Content Type:**
   - Select one of the radio buttons to choose the type of content you want to fetch (HTML, JSON, Movies).

2. **View the Results:**
   - The fetched content will be displayed in the "Resultats..." section.

## Features

- Fetches HTML content using Ajax.
- Fetches JSON content using Ajax and displays it.
- Fetches movie information using Ajax and displays it in a grid layout.
- Responsive design for different screen sizes.

## Technologies Used

- HTML
- CSS
- JavaScript (Ajax)
- PHP

## Project Structure

Outline of the project directory:

```plaintext
ajax-exercise-project/
└── style.css                # CSS styles
├── images/
│   └── ...                      # Images for the project
├── classGetContent.js       # JavaScript class for fetching content
└── main.js                  # JavaScript functionality
├── html.php                 # PHP file for fetching HTML content
├── json.php                 # PHP file for fetching JSON content
└── movies.php                # PHP file for fetching movie content
├── index.html                   # Main HTML file
├── README.md                    # Project documentation
└── composer.json                # Composer file (if needed for dependencies)
```

## Challenges and Learnings

1. **Handling Different Content Types:**
   - **Challenge**: Fetching and displaying different types of content (HTML, JSON, Movies) using Ajax.
   - **Solution**: Created a JavaScript class to handle the fetching and used conditionals to display the content appropriately.

2. **Responsive Design:**
   - **Challenge**: Making the movie grid responsive.
   - **Solution**: Used CSS grid and media queries to ensure a responsive layout.

## Future Improvements

- Add error handling for Ajax requests.
- Improve the styling and user interface.
- Add more content types to fetch and display.
- Implement caching for repeated requests.

## Contact

For any questions or feedback, you can reach me at:

- GitHub: [Nada-TB](https://github.com/Nada-TB)


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

