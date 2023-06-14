import { RxDotFilled } from "react-icons/rx";
import Space from "../common/Space";

const Secondary = () => {
  const secondary = {
    docs: [
      "Latest school report",
      "Reference letter from current school",
      "Birth Certificate",
      "Mother/Guardian ID or Passport",
      "Father/Guardian ID or Passport",
      "Proof of residence",
      "Ministry Results (Grade 8)",
    ],
    criteria: [
      "Academic performance",
      "Sport achievements",
      "Cultural achievements",
      "Behaviour",
      "Affordability",
      "Proximity to school",
    ],
  };

  return (
    <div>
      <h1 className="text-lg lg:text-xl font-bold italic mb-2 underline">
        Secondary School Application Process
      </h1>
      <Space />
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
        {secondary.docs.map((doc, index) => (
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
        {secondary.criteria.map((req, index) => (
          <p key={index} className="pt-4 flex items-center">
            <RxDotFilled className="mr-8" /> {req}
          </p>
        ))}
      </div>
      <Space text="half" />
      <p>
        <b>PLEASE NOTE: Placements are not guaranteed.</b>
        Residential address should be that of the parent or legal gard. If the
        guardian is not the parent, proof of legal guardianship as recognised by
        Ethiopian Government.
      </p>
      <Space text="half" />
      <p>
        African Lows, including a commitment to pay school fees, must accompany
        the application. The applicant most permanently reside at that address
      </p>
      <Space text="half" />
      <p>
        Applicants will only be contacted if their application is successful.
      </p>
    </div>
  );
};

export default Secondary;
