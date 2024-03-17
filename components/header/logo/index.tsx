import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="">
      <Link href="/">
        <Image
          src="/images/our-planet-earth-logo.svg"
          alt="Logo by Freepik"
          width={200}
          height={200}
          className="bg-cover bg-center rounded-full cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Logo;
