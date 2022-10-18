import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

interface Props {
  src: string;
}

const Illustration = ({ src }: Props) => {
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
        src={src}
        draggable="false"
        aria-hidden="true"
      />
    </div>
  );
};

export default Illustration;
