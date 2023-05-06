import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link
            about="Back to home."
            href="/"
            className="btn btn-ghost normal-case text-xl"
          >
            {title}
          </Link>
        </div>
        <SignedIn>
          <div className="mx-2">
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <div className="mx-2">
            <SignInButton />
          </div>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
