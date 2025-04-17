import { RESUME_URL } from "@/lib/constants";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm px-6 updated">
      <div className="max-w-3xl mx-auto h-16 flex items-center justify-between">
        <p className="font-medium text-foreground py-2 select-none">AS</p>
        <Link
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="text-sm py-2 rounded-lg text-foreground hover:bg-accent transition-colors duration-200"
        >
          View Resume
        </Link>
      </div>
    </header>
  );
};

export default Header;
