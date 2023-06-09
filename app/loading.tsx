import Image from "next/image";
import spinner from "./../public/spinner.svg";

export default function Loading() {
  return (
    <div className='loading-h flex items-center justify-center'>
      <Image alt='spinner' src={spinner} />
    </div>
  );
}
