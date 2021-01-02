/* /src/pages/Home.js */

import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <h2> Halaman Home </h2>
      List of Post
      <ul>
        <li>
          <Link to="/post/1">Post 1</Link>
        </li>
        <li>
          <Link to="/post/2">Post 2</Link>
        </li>
        <li>
          <Link to="/post/3">Post 3</Link>
        </li>
      </ul>
    </div>
  );
};
