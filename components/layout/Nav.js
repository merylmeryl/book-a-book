import Link from "next/link";

const Nav = () => {
  return (
    <nav className="p-6 bg-white px-6 py-4 shadow">
      <div className="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <a className="text-yellow-500 text-xl font-bold md:text-2xl">
                Book a Book
              </a>
            </Link>
          </div>
        </div>
        <div className="md:flex flex-col md:flex-row md:-mx-4 hidden">
          <Link href="/">
            <a className="my-1 text-gray-800 hover:text-gray-500 md:mx-4 md:my-0">
              Login
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
