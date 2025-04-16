# BRYNK LABS - Hiring Assignment

## 📜 Overview
This project is a **Hiring Assignment** for Brynk Labs, designed to demonstrate the ability to create a responsive website with dynamic content management capabilities. 

The assignment involves:
1. Designing a **pixel-perfect landing page** based on the provided Figma design.
2. Developing a **CMS (Content Management System)** for managing content dynamically.
3. Implementing APIs to connect the CMS and the landing page.

---

## 🧩 Features
### 🎨 Landing Page
- **Pixel-perfect design**: Matches the Figma design exactly.
- **Responsive layout**: Adapts to different screen sizes.
- **Dynamic Heading**: The main heading on the page is fetched dynamically from a database via an API.

### 🛠️ Content Management System (CMS)
- User-friendly interface for managing the main heading.
- A seamless connection between the CMS and the landing page.
- Responsive and customizable design for the CMS page.

### 🌐 APIs
- **POST API**: Saves the heading text entered in the CMS to the database.
- **GET API**: Retrieves the heading text from the database for the landing page.

---

## 🚀 Objectives
1. **CMS Page**: 
   - Build a page with a text field to store and update the main heading in a database.
   - The design is flexible—feel free to innovate.

2. **Customer-Facing Page**:
   - Design a pixel-perfect, responsive landing page as per the provided Figma.
   - The heading is dynamic, while the rest of the content is static.
   
3. **API Integration**:
   - Implement a POST API to save the CMS input to a database.
   - Implement a GET API to fetch the data and display it on the landing page.

---

## 🛠️ Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB or any suitable DB
- **Build Tool**: Vite
- **UI Framework**: shadcn-ui

---

## 🛠️ Installation & Setup
To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dasupathi/BRYNK-LABS-ASSIGNMENT.git
   cd BRYNK-LABS-ASSIGNMENT
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **API Endpoints**:
   - POST API: `/api/set-heading`
   - GET API: `/api/get-heading`

5. **Environment Variables**:
   Set up a `.env` file with the following:
   ```
   DB_URI=<your-database-uri>
   PORT=3000
   ```

---

## 📄 Instructions
1. **CMS Page**:
   - Design the interface to input and save the main heading.
   - Ensure the page is responsive and user-friendly.

2. **Landing Page**:
   - Follow the Figma design strictly for a pixel-perfect result.
   - Use the GET API to display the dynamic heading.

3. **APIs**:
   - Use a database table to store the heading.
   - Fetch the heading dynamically for the landing page.

---

## 🏢 About Brynk Labs
Brynk Labs operates in stealth mode and is backed by strong funding. Founded by IIT and ISB alumni, the team has professional experience from leading companies like Amazon, Livspace, Paytm, and Revolut.

---

## 🔗 Resources
- [Figma Design](#) (Replace with actual link)
- [Documentation for APIs](#)

---

## 🧑‍💻 Author
Dasupathi - [GitHub Profile](https://github.com/dasupathi)

---

## 📝 License
This project is licensed under the [MIT License](LICENSE).
