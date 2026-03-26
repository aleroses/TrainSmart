import { useState } from "react";
import Navbar from "@/scenes/navbar";
import { SelectedPage } from "@/shared/types";

// type SelectedPage = (typeof SelectedPage)[keyof typeof SelectedPage];

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );

  return (
    <div className="app">
      <h1 className="font-dmsans bg-gray-20">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </h1>

      {/* <h2 className="font-montserrat">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2> */}
    </div>
  );
}

export default App;
