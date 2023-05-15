
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h3>
        Go to <Link to="/store">Store page </Link>
      </h3>
    </div>
  );
}

export default Home
