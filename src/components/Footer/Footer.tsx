import { FunctionComponent } from "react";
import { clsx } from "clsx";

interface Props {
  className?: string;
}

const socialMedias = ["facebook", "twitter", "instagram"];

const Footer: FunctionComponent<Props> = ({ className = "" }) => {
  return (
    <footer
      className={clsx(className, "flex flex-col items-center text-center")}
    >
      <nav className="mb-24">
        <ul className="flex flex-row items-center space-x-14">
          {socialMedias.map((socialMedia) => (
            <li
              key={socialMedia}
              className="print:flex print:flex-col print:items-center"
            >
              <a
                className="flex h-32 w-32 items-center justify-center rounded-full text-blue ring-1 ring-pale-blue focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-blue motion-safe:transition-social hover-device:hover:bg-blue hover-device:hover:text-white hover-device:hover:ring-0"
                href="#"
                aria-label={`Go to the Ping ${socialMedia} page`}
              >
                <svg width="16" height="16" fill="currentColor">
                  <use href={`#icon-${socialMedia}`} />
                </svg>
              </a>
              <p
                className="hidden print:mt-8 print:block print:text-label-md print:text-very-dark-blue"
                aria-hidden="true"
              >{`https://${socialMedia}.com/ping/`}</p>
            </li>
          ))}
        </ul>
      </nav>
      <p className="text-body-sm lg:text-body-md">
        <span aria-hidden="true">©</span> Copyright Ping. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
