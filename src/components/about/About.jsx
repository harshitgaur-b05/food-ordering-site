import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/avatar.jpeg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>TadkaTreats</h4>
          <p>
            We are TadkaTreats. The place for most tasty FOOD on the
            enitre earth.
          </p>

          <p>
            Explore the various type of food . Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="avatar" />
              <h3>Harshitgaur</h3>
            </div>

            <p>
              I am Harshitgau, the founder of TadkaTreats. Affiliated to
              God Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
