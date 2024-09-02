import { ReactSvg } from "./ReactSvg";
import { Button } from "./Button";
import { ShoppingBasket, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex w-full items-center py-4">
      <h1 className="inlin-flex items-center gp-2 text-lg font-bold"></h1>
      <ReactSvg size={32} />
      <span>ReactJourney</span>
      <div className="flex intems-center ml-auto gap-2">
        <Button variant="ghost">
          <ShoppingBasket size={24} />
        </Button>
        <Button variant="ghost">
          <User size={24} />
        </Button>
      </div>
    </header>
  );
};
