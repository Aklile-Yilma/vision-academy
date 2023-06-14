import Preparatory from "../components/Admissions/Preparatory";
import Primary from "../components/Admissions/Primary";
import Secondary from "../components/Admissions/Secondary";
import Heading from "../components/common/Heading";

const Admisstions = () => {
  return (
    <div className="w-full md:w-3/4 lg:w-1/2 m-auto p-8 flex flex-col gap-y-10">
      <Heading text="Admissions" />
      <Primary />
      <Secondary />
      <Preparatory />
    </div>
  );
};

export default Admisstions;
