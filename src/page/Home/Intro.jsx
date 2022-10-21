import me from "../../images/guy.jpg";

const intro = () => {
  return (
    <div className="intro">
      <div className="intro-box-1">
        <div className="blog">
          <h1>
            I'm <span className="highlight">Dipin Bhattarai</span>
          </h1>
          <p>
            I am a self-learned front-end web developer. I will help you build
            your ideal website.
          </p>
          <ul>
            <li>I can built responsive website.</li>
            <li>I will host your website online.</li>
            <li>I also specialize in react development.</li>
            <li>I can also work with firebase if needed.</li>
          </ul>
          <div className="btns">
            <a href="mailto:bhattaraidipin@gmail.com">
              <button className="button">Hire Me</button>
            </a>
          </div>
        </div>
      </div>
      <img src={me} alt="" className="myimage" />
    </div>
  );
};

export default intro;
