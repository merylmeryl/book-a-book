import Head from "next/head";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title className="text-yellow-600">Book a Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-100 bg-library bg-repeat-y bg-opacity-75">
        <Nav />
        <div className="container mx-auto p-6 font-sans flex flex-col min-h-screen">
          <main className="px-6 py-8 mt-8">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
