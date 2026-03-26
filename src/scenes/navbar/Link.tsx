import AnchorLink from "react-anchor-link-smooth-scroll";

import { SelectedPage } from "@/shared/types";

type Props = {
  page: SelectedPage;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};


/* type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}; */

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  // const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  return (
    <AnchorLink
      className={`${selectedPage === page ? "text-primary-500" : ""} hover:text-primary-300 transition duration-500`}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
