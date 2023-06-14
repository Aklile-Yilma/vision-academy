import { RxDotFilled } from "react-icons/rx";
import Space from "../common/Space";

const Preparatory = () => {
  const prepartory = {
    docs: [
      "Latest school report",
      "Reference letter from current school",
      "Birth certificate OR Passport",
      "Mother/Guandian ID/or Passport",
      "Father/Guardan ID or Passport",
      "Proof of residence",
      "EGSEC (Matric Results)",
    ],
    criteria: [
      "Academic performance",
      "Sport achievements",
      "Cultural achievements",
      "Behavior",
      "Leadership qualities",
      "Proxmity to school",
    ],
    paragraph: [
      "Based in on the number at educators, the school&apos;s facilities and the choice of aspects oriented at the school, the school shall adimit no more than 1550 students at any.",
      "Class sizes shall be no bigger than 55 students per class",
      "The language of instruction at the school shall be English with the obvious exception of other languages offered as additional languages. It is in the best interests of the people that they are able to cope in anEnglish medium environment.",
    ],
  };

  return (
    <div>
      <h1 className="text-lg lg:text-xl font-bold italic mb-2 underline">
        Preparatory School Application Process
      </h1>
      <p>
        This application process is currently ongoing and parents must complete
        the above secondary education Application together with the students.
      </p>
      <Space />
      <p className="font-bold">
        {" "}
        Please prepare the following documents individually, and bring them to
        the office with two copies.
      </p>
      {/* required docs */}
      <div>
        {prepartory.docs.map((doc, index) => (
          <p key={index} className="pt-4">
            ({index + 1}) {doc}
          </p>
        ))}
      </div>
      <p className="font-bold pt-4">
        The School use the following criteria when placing students at schools
      </p>
      {/* criteria */}
      <div>
        {prepartory.criteria.map((req, index) => (
          <p key={index} className="pt-4 flex items-center">
            <RxDotFilled className="mr-8" /> {req}
          </p>
        ))}
      </div>
      <Space text="half" />
      <p>
        <b>PLEASE NOTE: Placements are not guaranteed.</b>
      </p>
      <Space text="half" />
      {prepartory.paragraph.map((p, index) => (
        <section key={index}>
          <p>{p}</p>
          <Space text="half" />
        </section>
      ))}
      <p>
        It space permits, following the application of these criteria,
        preference will be given to pupils who:
      </p>
      <p className="flex items-center">
        <RxDotFilled className="mr-8" /> have specialised skills or talents that
        the school has the potential to develop, or
      </p>
      <p className="flex items-center">
        <RxDotFilled className="mr-8" /> who have strong academic ability to be
        able to cope with the high standards expected at the school, or are able
        to cope in a traditional school environment.
      </p>
    </div>
  );
};

export default Preparatory;
