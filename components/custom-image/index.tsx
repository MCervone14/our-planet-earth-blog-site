import Image from "next/image";

interface CustomImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const CustomImage = ({ src, alt, priority }: CustomImageProps) => {
  return (
    <div className="w-full h-full">
      <Image
        className="rounded-md mx-auto"
        src={src}
        alt={alt}
        width={845}
        height={650}
        priority={priority}
      />
    </div>
  );
};

export default CustomImage;
