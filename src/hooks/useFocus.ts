import { useRef } from "react";

// TODO: useFocus 수정하기
const useFocus = () => {
  const ref = useRef(null);
  const setFocus = () => {
    // ref.current && ref.current.focus();
  };

  return { ref, setFocus };
};

export default useFocus;
