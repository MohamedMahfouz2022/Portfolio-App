import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="px-4 py-2 text-white sm:px-6 xl:py-6">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <Link href="/" aria-label="Mohamed Mahfouz home" className="shrink-0 rounded outline-none focus-visible:ring-2 focus-visible:ring-accent">
          <span className="text-3xl font-semibold sm:text-4xl">Mo<span className="text-accent">.</span></span>
        </Link>
        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          <Link href="/contact"><Button>Hire me</Button></Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
