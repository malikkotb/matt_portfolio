import Link from "next/link";

export default function Projects() {
  return (
    <div className="p-4 h-[600px] items-center relative">
      <h2 className="my-8 text-4xl">Collaborations include:</h2>
      <div className="ml-8 flex flex-col text-4xl italic gap-8 ">
        <Link
          href=""
          className=" w-56 origin-left transition-transform transform hover:scale-110"
        >
          BMW{" "}
        </Link>
        <Link
          href=""
          className=" w-56 origin-left transition-transform transform hover:scale-110"
        >
          Lancia{" "}
        </Link>
        <Link
          href=""
          className=" w-56 origin-left transition-transform transform hover:scale-110"
        >
          Alpina{" "}
        </Link>
        <Link
          href=""
          className=" w-56 origin-left transition-transform transform hover:scale-110"
        >
          Lamborghini{" "}
        </Link>
        <Link
          href=""
          className=" w-56 origin-left transition-transform transform hover:scale-110"
        >
          strate{" "}
        </Link>
        <Link
          href=""
          className=" w-56 origin-left transition-transform transform hover:scale-110"
        >
          Opel{" "}
        </Link>
      </div>
    </div>
  );
}
