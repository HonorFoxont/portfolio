const Card = ({ projects }) => {
  return (
    <div className="card">
      {projects.map((project) => (
        <div className="item" key={project.key}>
          <h2>{project.title}</h2>
          <p>
            {project.body}
            <br />
            <br />
            <b>Built using :</b> {project.built}
          </p>

          <p>
            {project.status}
            <a href={project.link}> Source code </a>
            <span>| Status: {project.status}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
