import { ClassType } from "@/shared/types";

type Props = {
  data: ClassType;
};

const Class = ({ data }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{data.name}</p>
        <p className="mt-5">{data.description}</p>
      </div>
      <img alt={data.image} src={data.image} />
    </li>
  );
};

export default Class;
