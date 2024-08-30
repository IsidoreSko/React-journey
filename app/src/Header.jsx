import { ReactSvg } from "./ReactSvg";

export const Header = () => {
  return (
    <header className="flex w-full items-center py-4">
      <h1 className="inlin-flex items-center gp-2 text-lg font-bold"></h1>
      <ReactSvg size={32} />
      <span>ReactJourney</span>
    </header>
  );
};
