import React, { useState } from "react";

export default function Jokes(props) {
  const [isShown, setIsShown] = useState(false);

  function toggle() {
    setIsShown((prevIsShown) => !prevIsShown);
  }

  return (
    <div className="jokes">
      <h3>{props.setup}</h3>
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggle}>{isShown ? 'Hide Punchline' : 'Show Punchline'}</button>
    </div>
  );
}