import React from "react";
import { Link } from "react-router-dom";

interface Props {}

export const Header: React.FC<Props> = () => {
  const rest = "/rest";
  const main = "/";
  return (
    <div className="mb-2">
      <Link to={main}>
        <button className="mr-2">Main</button>
      </Link>

      <Link to={rest}>
        <button className="mr-2">Rest</button>
      </Link>
    </div>
  );
};

export default Header;
