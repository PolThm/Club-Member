import React from "react";

const Header = () => {
  let today: Date | string = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;

  return (
    <header className="py-6 px-10 flex justify-between items-center border-b-1 shadow-md relative">
      <h1 className="text-2xl">Club Member</h1>
      <div className="text-lg">{today}</div>
    </header>
  );
};

export default Header;
