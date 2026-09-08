import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <section>
      <h2>404: Not Found</h2>
      <p>{pathname} is invalid</p>
      <Link to="/lessons/lesson-10/">Go back to Home</Link>
    </section>
  );
}
