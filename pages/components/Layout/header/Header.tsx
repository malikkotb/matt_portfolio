import Link from "next/link";
import styles from "./style.module.scss";

type HeaderProps = {
  menuIsActive: boolean;
  setMenuIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ menuIsActive, setMenuIsActive }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={`font-bold text-2xl ${menuIsActive ? "text-white opacity-80" : "text-[#4A4049]"} `}>MJ</div>
      <div
        onClick={() => {
          setMenuIsActive(!menuIsActive);
        }}
        className={`${styles.burger} ${
          menuIsActive ? styles.burgerActive : ""
        }`}
      ></div>
    </div>
  );
}
