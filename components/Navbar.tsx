import Image from "next/image";

const Navbar = () => {
  const isProduction = process.env.NODE_ENV === "production";
  
  return (
    <div className="flex justify-center items-center p-4 bg-gray-200 h-16">
      <div className="flex items-center gap-2">
        <h1 className="text-md font-bold">
          L'Assiette Futée {isProduction ? "" : "(dev v1)"}
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
