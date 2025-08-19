import {type ReactNode } from "react";

interface UserShape {
  children: ReactNode
}

const User = ({children}: UserShape) => {
  return (
    <div>
      <h2>{children}</h2>
    </div>
  );
};

export default User;
