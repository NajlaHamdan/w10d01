import Head from "next/head";
import Link from "next/link";
function Navbar() {
  return (
    <>
      {/* <div>Home</div>{" "} */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>contact Us</a>
          </Link>
        </li>
        <li>
        <Link href="/posts">
          <a>posts </a>
        </Link>
      </li>
  
      </ul>
    </>
  );
}
export default Navbar;