type BackgroundImageProps = {
  className?: string;
  src?: string;
};

export default function BackgroundImage({ className, src }: BackgroundImageProps) {
  const imageSrc = src ?? "/portfolio/images/background.jpg";
  return (
    <div className={"pointer-events-none absolute inset-0 -z-10 " + (className ?? "")}> 
      <div className="relative w-full h-full">
        <img
          src={imageSrc}
          alt="Background"
          className="w-full h-full object-cover select-none"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-100 bg-gradient-to-b from-[#252525] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-100 bg-gradient-to-b from-transparent to-[#252525]" />
      </div>
    </div>
  );
}


