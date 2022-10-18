import { clsx } from "clsx";

interface Props {
  className?: string;
}

const Header = ({ className = "" }: Props) => {
  return (
    <header className={clsx(className)}>
      <svg className="h-16 w-56 lg:h-24 lg:w-86" aria-hidden="true">
        <use href="#logo" />
      </svg>
      <h1 className="sr-only">Ping Website</h1>
    </header>
  );
};

export default Header;
