import {
  motion,
  useScroll,
  useTransform
} from "motion/react";

const HeroHeading = ({
  containerRef
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
 
  const fontSizex = useTransform(scrollYProgress, [0, 0.3, 0.6, 0.9, 1], [
    "10vw",
    "8vw",
    "6vw",
    "5vw",
    "4vw"
  ]);

  const fontSizey = useTransform(scrollYProgress, [0.3, 0.5, 0.7, 0.9, 1], [
    "10vw",
    "9vw",
    "8vw",
    "7vw",
    "6vw"
  ]);

  return (
    <div
      ref={containerRef}
      className="absolute left-0 w-full h-[10rem] flex justify-center items-center z-10 "
    >
      <div className="  flex flex-col justify-center items-center text-primary ">
        <motion.h1
          style={{ fontSize : fontSizex }}
          
          className="text-[10vw] lg:[5rem] md:[5rem] leading-none font-bold font-serif text-center text-shadow-sm"
        >
          Omeg
        </motion.h1>
        <motion.h1
          style={{ fontSize : fontSizey}}
          className="text-[10vw] lg:[5rem] md:[5rem] leading-none font-semibold font-serif"
        >
          Bazaar
        </motion.h1>
      </div>
    </div>
  );
};

export default HeroHeading;
