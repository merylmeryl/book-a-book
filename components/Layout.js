import Head from "next/head";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title className="text-yellow-600">Book a Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-100">
        <Nav />
        <div className="container mx-auto p-6 font-sans">
          <main className="px-6 py-8">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
