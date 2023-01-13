import { Button } from "react-bootstrap";
import "./home.css";

export const Home = () => {
  return (
    <div className="intro">
      <h3>Welcome, To World Bank.</h3>
      <p>
        Fastest Growing and World's Wealthiest Customer Are Welcome And View Your Balance.
      </p>
      <Button id="btn"><a href="/all-Customer">View All Customer</a></Button>
    </div>
  );
};
