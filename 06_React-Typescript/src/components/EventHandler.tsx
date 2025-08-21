import { type MouseEvent } from "react";

const EventHandler = () => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!", e.currentTarget);
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered!", e.currentTarget);
  };
  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Event Handling Example</h2>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default EventHandler;
