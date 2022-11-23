const Card = ({ projects }) => {
  return (
    <div className="card">
      {projects.map((project) => (
        <div className="item" key={project.key}>
          <h2>{project.title}</h2>
          <div className="wrap">
            <div className="info">
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
            <img src={project.img} alt="project logo" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
