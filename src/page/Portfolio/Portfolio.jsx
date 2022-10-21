import "./portfolio.scss";
import Card from "./Card";
const Portfolio = () => {
  const projects = [
    {
      title: "Postbook",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita amet ducimus incidunt ex itaque accusamus nemo unde beatae asperiores architecto voluptates, nulla sunt nostrum quis veniam cumque? Cum, molestias a.",
      link: "https://github.com/HonorFoxont/postbook",
      built: "React",
      key: 1,
    },
    {
      title: "Book App",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita amet ducimus incidunt ex itaque accusamus nemo unde beatae asperiores architecto voluptates, nulla sunt nostrum quis veniam cumque? Cum, molestias a.",
      link: "https://github.com/HonorFoxont/Book-App",
      built: "HTML5, Bootstrap, Javascript",
      key: 2,
    },
    {
      title: "Weight Converter",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita amet ducimus incidunt ex itaque accusamus nemo unde beatae asperiores architecto voluptates, nulla sunt nostrum quis veniam cumque? Cum, molestias a.",
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
