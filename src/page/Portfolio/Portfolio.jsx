import "./portfolio.scss";
import Card from "./Card";
const Portfolio = () => {
  const projects = [
    {
      title: "Postbook",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita amet ducimus incidunt ex itaque accusamus nemo unde beatae asperiores architecto voluptates, nulla sunt nostrum quis veniam cumque? Cum, molestias a.",
      link: "gmail.com",
      built: "React",
      key: 1,
    },
    {
      title: "MyNovelList",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita amet ducimus incidunt ex itaque accusamus nemo unde beatae asperiores architecto voluptates, nulla sunt nostrum quis veniam cumque? Cum, molestias a.",
      link: "gmail.com",
      built: "HTML5, CSS, Javascript",
      key: 2,
    },
    {
      title: "Weight Converter",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita amet ducimus incidunt ex itaque accusamus nemo unde beatae asperiores architecto voluptates, nulla sunt nostrum quis veniam cumque? Cum, molestias a.",
      link: "gmail.com",
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
