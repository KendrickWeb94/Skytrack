import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="">
      <Image
        src={"/logo.png"}
        alt="Skytrack West Africa  Logo"
        width={90}
        height={50}
        className="object-contain w-28 h-auto saturate-xs"
      />
    </Link>
  );
}
