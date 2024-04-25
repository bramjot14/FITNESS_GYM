# FITNESS_GYM
This project is a basic HTML/CSS/Javascript webpage for a gym named "Alive Fitness". The webpage includes sections for home, a gallery of gym images, and a membership form.

### HTML Structure:
- **Header Section**: 
  - Contains the gym name, a tagline, and a brief description emphasizing the benefits of fitness.

- **Navigation Section**: 
  - Provides links to different sections of the webpage (`Home`, `Gallery`, `Membership`), which use anchor tags (`

- **Main Sections**:
  - **Home Section (`#home`)**:
    - Introduces the gym and its fitness programs.
  
  - **Gallery Section (`#images`)**:
    - Displays a collection of gym images in a gallery layout using `<img>` tags wrapped in a `<div>` with the class `image-gallery`.

  - **Membership Section (`#membership`)**:
    - Contains a membership form (`form`) where users can input their name, email, select a membership type (`Basic` or `Premium`), and submit the form.

### CSS Styling:
- Styles are defined for various HTML elements (`

h1`, `body`, `header`, `nav`, `section`, `form`, `footer`) to set colors, fonts, margins, paddings, and backgrounds.
- Utilizes flexbox (`flex-wrap`, `justify-content`) for responsive image layout within the gallery.
- Implements hover effects (`:hover`) for images in the gallery to add a shadow and border when hovered.

### JavaScript Functionality:
- **Form Validation (`validateForm()`)**:
  - Retrieves form input values (name, email, membership type).
  - Prompts the user to input their mobile number.
  - Checks if all required fields are filled (`name`, `email`, `membershipType`).
  - Verifies if the entered phone number is valid (exactly 10 digits and numeric).
  - Displays appropriate alerts (`alert()`) based on validation results.
  - Returns `true` if the form is successfully validated and `false` otherwise.

### Key Points:
- **Responsiveness**:
  - The webpage is designed to be responsive (`

<meta name="viewport" content="width=device-width, initial-scale=1.0">`) for various screen sizes.

- **User Interaction**:
  - The membership form includes interactive validation to ensure data integrity before submission.

- **Design Consistency**:
  - Consistent color scheme (`#2C3E50`, `#34495E`, `#ECF0F1`, `chocolate`) and typography (Arial, sans-serif) are used across the webpage.

- **Accessibility**:
  - Form fields include appropriate attributes (`required`, `type`) for accessibility and usability.

Overall, this project combines HTML structure, CSS styling, and JavaScript functionality to create a visually appealing and interactive webpage for a gym, allowing users to explore gym offerings and potentially join as members. The JavaScript validation enhances user experience by ensuring that data submitted through the form is valid and complete.
