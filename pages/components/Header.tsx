import { HamburgerMenuIcon } from "@radix-ui/react-icons"
export default function Header() {
  return (
    <div className="p-4 h-28 bg-slate-100 w-full flex justify-between items-center">
      <div className="bg-[#011EF5] font-medium text-white rounded-full p-4">MJ</div>
      <div>
        <div className="border text-black rounded-full p-4"><HamburgerMenuIcon /></div>
      </div>
    </div>
  );
}
