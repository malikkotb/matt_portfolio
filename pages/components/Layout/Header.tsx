import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
export default function Header() {
  return (
    <div className="m-0 p-4 h-28 bg-slate-100 w-full flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Link href={"/home"} className="font-medium rounded-full p-4">
          MJ
        </Link>
        <Link className="font-medium" href={"/mini"}>Mini</Link>
        <Link className="font-mdeium" href={"/projects"}>Projects</Link>
      </div>
      <div className="border relative text-black rounded-full p-4"><HamburgerMenuIcon /></div>
    </div>
  );
}
