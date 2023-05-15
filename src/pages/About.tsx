
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <h3>
        Go to <Link to="/store">Store page </Link>
      </h3>
    </div>
  );
}

export default About
