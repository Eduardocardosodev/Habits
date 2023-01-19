import { Plus } from "phosphor-react";

import logoImage from "../assets/logo.svg";
import { useState } from "react";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const buttonClicked = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="Habits" />

      <button
        type="button"
        onClick={buttonClicked}
        className="border border-violet-500 font-simibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
      >
        <Plus size={20} className="text-violet-500" />
        Novo habito
      </button>
    </div>
  );
}
