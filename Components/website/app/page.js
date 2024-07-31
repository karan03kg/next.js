import Image from "next/image";

export default function Home() {
  return (
    <div className="py-14 size-80 bg-red-200 relative my-10">
      <Image className="mx-auto" fill={true} src="https://i.pinimg.com/736x/ca/67/c7/ca67c71f9d34125249daa9b69298443c.jpg" alt="" />
      {/* <img className="mx-auto"  src="https://i.pinimg.com/736x/ca/67/c7/ca67c71f9d34125249daa9b69298443c.jpg" alt="" /> */}
    </div>
  );
}
