import { useState } from "react";
import { GenericButton } from "..";
import FiltersSelections from "./FiltersSelections";
import { FilterIcon } from "../../../../assests/svgIcons";

export default function FilterButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <GenericButton
        icon={FilterIcon}
        text="Filter"
        onClick={() => setShowModal(!showModal)}
        targetModalID="filters"
      />
      {showModal ? <FiltersSelections /> : null}
    </>
  );
}
