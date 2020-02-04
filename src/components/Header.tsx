import React from "react";
import { Link } from "react-router-dom";

interface Props { }

export const Header: React.FC<Props> = () => {
  const rest = "/rest";
  const main = "/";
  return (
    <>
      <Link to={main}>
        <button>Main</button>
      </Link>
      <Link to={rest}>
        <button>rest</button>
      </Link>
    </>
  );
};

export default Header;