import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
export default function Header() {
  return (
    <div className="m-0 p-4 h-28 bg-slate-300 w-full flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div className="bg-[#011EF5] font-medium text-white rounded-full p-4">
          MJ
        </div>
        <Link href={"/mini"}>Mini</Link>
        <Link href={"/projects"}>Projects</Link>
      </div>
      <div className="border relative text-black rounded-full p-4"><HamburgerMenuIcon /></div>
    </div>
  );
}
