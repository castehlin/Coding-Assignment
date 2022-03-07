import { ReactNode } from "react";
import style from "./common.module.css";

export type Props = {
  children: ReactNode;
};

export default function Button({ children }: Props): JSX.Element {
  return (
    <button
      className={style.button}
      onClick={() => window.alert("Button Clicked")}
    >
      {children}
    </button>
  );
}
