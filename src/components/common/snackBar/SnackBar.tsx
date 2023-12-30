interface Prop {
  title: string;
}

const SnackBar = ({ title }: Prop) => {
  return (
    <div className="w-56 h-10 bg-orange-300 absolute top-5 left-10 flex items-center justify-center">
      <p className=" font-thin text-gray-700 ">{title}</p>
    </div>
  );
};

export default SnackBar;
