import "./portfolio.scss";
import Card from "./Card";
import pbicon from "../../images/postbook.png";
import baicon from "../../images/bookapp.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Postbook",
      body: "Postbook is a simple social media app that accept multiple users. Users can post images with texts that are visible to other users. Postbook uses firebase as a backend where firestore stores data and firebase-auth is used for authitication. It includes unique profile page for every user which gives the basic information of the user.",
      link: "https://honorfoxont.github.io/postbook/",
      built: "React",
      img: pbicon,
      status: "In Process",
      key: 1,
    },
    {
      title: "Book-App",
      body: "The Book-App allows user to store collection of books with unique title, author and ISBN. User can add, delete and edit books stored in this app. The Information are stored in the local storage and will not disappear unless user deletes them.",
      link: "https://honorfoxont.github.io/Book-App/",
      built: "HTML5, Bootstrap, Javascript",
      img: baicon,
      status: "Completed",
      key: 2,
    },
    {
      title: "SinglePage-portfolio",
      body: "A single page portfolio build using html css and vanilla javascript.",
      link: "https://honorfoxont.github.io/portfolio2/",
      built: "React",
      img: pbicon,
      status: "Completed",
      key: 1,
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
