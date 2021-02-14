import Link from "next/link";

const Nav = () => {
  return (
    <nav className="p-6 bg-white px-6 py-4 shadow">
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
        <div className="flex flex-col mx-4">
          <Link href="/bookHistoryReport">
            <a className="my-0 text-gray-800 hover:text-gray-500 mx-4">
              History Report
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
