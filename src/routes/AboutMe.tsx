import SkillBar from "../components/SkillBar.tsx";
import "../css/SkillBar.css";

import "../css/AboutMe.css";

//TODO This whole page needs to be much more interesting

function AboutMe() {
  return (
    <div className="My-Main-Content">
      <p>
        My name is Morgan Evans, a student studying at the University of
        Nottingham for a Masters's degree with a placement year in Computer
        Science (graduating in 2028).
      </p>
      <p>
        In my first year of university I was introduced to a multitude of
        different languages and technologies which I list in my{" "}
        <a href="#skillsandexperience">'Skills and Experience'</a> section.
        During my second year, I achieved an average of 78% across all my
        modules, and was the team leader of eight software developers for our
        year-long group project, which we achieved 84% in.
      </p>
      <p>
        For my hobbies, I enjoy Muay Thai and strength training. I play the
        violin at a grade 5 (ABRSM) level as well as painting Warhammer
        miniatures. It is a good way to express my creativity, and is fun to
        play with friends.
      </p>
      <p>
        I am currently searching for a year in industry placement for the
        2027/2028 academic year. I would love to do one of my placements as a
        software engineer, however, I believe any placement would be beneficial
        as it would broaden my knowledge of different fields in Computer
        Science.
      </p>
      <h2 id="skillsandexperience">Skills and Experience</h2>
      <h3>Education</h3>
      <h5>
        Computer Science (MSci Hons with Placement Year) | 2023-2028 |
        University of Nottingham
      </h5>
      <ul>
        <li>Achieved a First-Class grade in both my first and second years.</li>
        <li>
          Worked with my peers on two software engineering projects, in which we
          were taught common industry practices using software such as Git.
        </li>
        <li>
          Achieved 84% on a group project that I was the team leader of. The
          group project involved a large range of new technologies and has been
          my most useful module so far, as I learnt a lot.
        </li>
      </ul>
      <br />
      <h4>Technical Skills</h4>
      <p className="tooltip-text">
        (The values in the bars indicate my proficiency with the associated
        technology. The values are based off of my own confidence and
        experience.)
      </p>
      <SkillBar name="Node.js" value={80} color="#335e22" valueColor="white" />
      <SkillBar name="React" value={70} color="#58c4dc" />
      <SkillBar name="Java" value={65} color="#e76f00" />
      <SkillBar name="C" value={55} color="#2a3793" valueColor="white" />
      <SkillBar name="Python" value={55} color="#ffcd43" />
    </div>
  );
}

export default AboutMe;
