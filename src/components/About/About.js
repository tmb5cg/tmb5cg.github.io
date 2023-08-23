import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about } from "../../portfolio";
import "./About.css";

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          I am <span className="about__name">{name}</span>
        </h1>
      )}

      {role && <h2 className="about__role">{role}</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <span
            onClick={() =>
              alert(
                "Resume {} outdated. I encourage you to contact me via email at copay-castle.0y@icloud.com (this forwards to my actual email)"
              )
            }
            className="btn btn--outline"
            style={{ cursor: "pointer" }}
          >
            Resume
          </span>
        )}

        {/* {resume && (
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )} */}

        {social && (
          <>
            {social.github && (
              <a href={social.github}>
                <span type="button" className="btn btn--outline">
                  GitHub
                </span>
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
