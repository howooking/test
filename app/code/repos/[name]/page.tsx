export default function SingleRepo({
  params: { name }, // 이런식의 destruction
}: {
  params: {
    name: string;
  };
}) {
  return <div className='pt-[76px]'>{name}</div>;
}
