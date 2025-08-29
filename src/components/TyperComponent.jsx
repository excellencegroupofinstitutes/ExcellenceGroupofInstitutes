import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TyperComponent = ({
  strings,
  typeSpeed = 80,
  backSpeed = 50,
  backDelay = 1500,
  loop = true,
}) => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed,
        backSpeed,
        backDelay,
        loop,
        showCursor: true,
        cursorChar: "|",
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop]);

  return <span ref={el}></span>;
};

export default TyperComponent;
