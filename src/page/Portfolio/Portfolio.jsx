import "./portfolio.scss";
import Card from "./Card";
const Portfolio = () => {
  const projects = [
    {
      title: "Postbook",
      body: "Postbook is a simple social media app that accept multiple users. Users can post images with texts that are visible to other users. Postbook uses firebase as a backend where firestore stores data and firebase-auth is used for authitication. It includes unique profile page for every user which gives the basic information of the user.",
      link: "https://github.com/HonorFoxont/postbook",
      built: "React",
      key: 1,
    },
    {
      title: "Book-App",
      body: "The Book-App allows user to store collection of books with unique title, author and ISBN. User can add, delete and edit books stored in this app. The Information are stored in the local storage and will not disappear unless user deletes them.",
      link: "https://github.com/HonorFoxont/Book-App",
      built: "HTML5, Bootstrap, Javascript",
      key: 2,
    },
    {
      title: "Weight Converter",
      body: "Weight converter is a simple application which allows user to convert weight in different units of measurment to another. The units include pounds, kilos, grams and ounces. This application implements basic fundamentals of javascript.",
      link: "https://github.com/HonorFoxont/Weight-Converter",
      built: "HTML5, CSS, Javascript",
      key: 3,
    },
  ];
  return (
    <div className="portfolio">
      <h1>My projects</h1>
      <div class="wrapper">
        <Card projects={projects} />
      </div>
    </div>
  );
};

export default Portfolio;
