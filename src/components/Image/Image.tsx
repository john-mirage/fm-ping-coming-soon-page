import { FunctionComponent, useEffect, useRef, useState } from "react";
import dashboardIllustration from "@images/illustration-dashboard.png";
import { clsx } from "clsx";

const Image: FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;
    if (imageRef.current.complete) return;
    let current = true;
    imageRef.current.addEventListener("load", () => {
      if (!imageRef.current || !current) return;
      setTimeout(() => {
        setVisible(true);
      }, 0);
    });
    return () => {
      current = false;
    };
  }, []);

  return (
    <div className="aspect-w-16 aspect-h-10 w-full">
      <img
        ref={imageRef}
        className={clsx(
          "object-cover object-center motion-safe:transition-opacity motion-safe:duration-1000",
          {
            "opacity-0": !visible,
          }
        )}
        src={dashboardIllustration}
        draggable="false"
        aria-hidden="true"
      />
    </div>
  );
};

export default Image;
