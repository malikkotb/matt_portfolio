import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import styles from './style.module.scss';


type HeaderProps = {
  menuIsActive: boolean;
  setMenuIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({menuIsActive, setMenuIsActive}: HeaderProps) {
  return (
    <div className="m-0 p-4 h-28 bg-slate-100 w-full flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Link href={"/home"} className="font-medium rounded-full p-4">
          MJ
        </Link>
        <Link className="font-medium" href={"/about"}>About</Link>
        <Link className="font-medium" href={"/mini"}>Mini</Link>
        <Link className="font-medium" href={"/projects"}>Projects</Link>
      </div>
      <div onClick={() => {setMenuIsActive(!menuIsActive)}} className={`${styles.burger} ${menuIsActive ? styles.burgerActive : ""}`}>

        </div>
      <div className="border relative text-black rounded-full p-4"><HamburgerMenuIcon /></div>
    </div>
  );
}
