import React from "react";
import { SettingsDialog } from "./SettingsDialog"; // Import your SettingsDialog

const Header: React.FC = () => (
  <header className="w-full flex items-center justify-between py-4 px-6 bg-zinc-900 border-b border-zinc-800">
    <div className="text-2xl font-bold text-white">wan22-brkn-prompt-helper</div>
    <div>
      <SettingsDialog />
    </div>
  </header>
);

export default Header;
