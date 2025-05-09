'use client';

import { InstagramIcon } from "../assets/icons/instagram.icon";

export const FooterComponent = () => {
  return (
    <footer className="flex flex-col w-full bg-base-color py-10 items-center p-4">
      <div className="flex flex-col max-w-7xl w-full justify-between sm:px-10 pb-5">
        <div className="flex justify-between">
          <p className="text-4xl font-medium">DSE</p>
          <a href="tel:380-93-216-84-51" className="mt-auto mb-auto md:text-xl text-[var(--text-alternative)]">+380 93 216 84 51</a>
        </div>
        <div className="mt-4 flex justify-between">
          <p className="text-sm md:text-lg font-golos-regular opacity-70">© 2025 Всі права захищені.</p>
          <a href='https://www.instagram.com/dse_detailing'><InstagramIcon className="my-auto text-[var(--text-alternative)]" /></a>
        </div>
      </div>
    </footer>
  );
};
