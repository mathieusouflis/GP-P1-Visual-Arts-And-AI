import { Clasical } from "./typography";

const PersonalBranding = ({ name, branding, role, image, children }) => {
  return (
    <div className="flex flex-col items-center w-96 p-6 rounded-lg">
      <img
        src={image}
        alt={`${name}'s profile`}
        className="rounded-full h-40 w-40 object-cover"
      />
      <div className="flex items-center flex-col mt-4">
        <Clasical className="text-xl font-bold">{name}</Clasical>
        <Clasical className="text-sm text-gray-500">{role}</Clasical>
      </div>
      <p className="mt-4 text-gray-700 text-sm flex flex-col gap-2">
        {children}
      </p>
    </div>
  );
};

export default PersonalBranding;
