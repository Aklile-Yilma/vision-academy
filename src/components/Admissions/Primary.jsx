import { RxDotFilled } from "react-icons/rx";
const Primary = () => {
  const primary = {
    docs: [
      "Latest school report",
      "National ID/Local ID",
      "Application Fee 1000 ETB",
      "Proof of employment if applying based on your work address",
      "Photographs",
    ],
    criteria: [
      "Siblings",
      "Previous grades",
      "Living within 30km from school",
      "Living outside 30km from school",
    ],
  };

  return (
    <div>
      <h1 className="text-lg lg:text-xl font-bold italic underline mb-2">
        Primary School Application Process
      </h1>
      <p>
        This process is run entirely by the Department of Admissions and
        students are required to apply in person. <br />
        &nbsp;
      </p>
      <p>
        The Department of admissions and Registrar office accepts applications
        every Monday and Thursday at working hours. <br />
        &nbsp;
      </p>
      <p className="font-bold">
        {" "}
        Please prepare the following documents individually, and bring them to
        the office with two copies.
      </p>
      {/* required docs */}
      <div>
        {primary.docs.map((doc, index) => (
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
        {primary.criteria.map((req, index) => (
          <p key={index} className="pt-4 flex items-center">
            <RxDotFilled className="mr-8" />
            List ({index + 1}) - {req}
          </p>
        ))}
      </div>
      <br />
      &nbsp;
      <p>
        <b>PLEASE NOTE: Placements are not guaranteed.</b>
        The outcome of the application is issued by the Department of
        Admissions. The outcome can only be announced on the notice board where
        you applied.
      </p>
    </div>
  );
};

export default Primary;
