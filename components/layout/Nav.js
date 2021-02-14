import Link from "next/link";

const Nav = () => {
  return (
    <nav className="p-6 bg-gray-800 text-white px-6 py-4 shadow fixed w-full">
      <div className="flex container mx-auto flex-row items-center justify-between">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <a className="text-yellow-500 text-xl font-bold md:text-2xl">
                Book a Book
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-row mx-4">
          <Link href="/bookHistoryReport">
            <a className="my-0 text-white hover:text-white mx-1 md:mx-4">
              Activity History
            </a>
          </Link>
          <Link href="/bookStatusReport">
            <a className="my-0 text-white hover:text-white mx-1 md:mx-4">
              Book States
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
