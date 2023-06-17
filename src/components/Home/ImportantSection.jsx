import { AiOutlineCheck } from "react-icons/ai";

const ImportantSection = () => {
  const infoData = [
    {
      header: "Honour",
      description:
        "The quality of knowing and doing what is morally right including taking responsibility and owning up when asked to. People of honour are held in high esteem by the community as those who can be trusted to do what is right, despite peer and social pressures. Honour relates more to how other people perceive you.",
    },
    {
      header: "Loyalty",
      description:
        "Being supportive and true to the school, what it stands for and to those in the school community. Recognising faults and constructively criticising does not imply disloyalty. Blind allegiance is discouraged but devotion, emotional attachment and a sense of belonging is nurtured.",
    },
    {
      header: "Integrity",
      description:
        "Having strong moral principles that are consistently lived under all circumstances. People of integrity are honest and righteous, having an unwavering moral compass. Integrity is purely a personal quality and has to do with personal beliefs rather than perceptions of others.",
    },
    {
      header: "Respect",
      description:
        "Having exceptionally good manners, so much so that this is commented upon by the school community, visitors to the school and the general public. Acting in a manner that is respectful to all, with consideration for others and their points of view. This includes respect for self, others, the school, the environment and those in authority.",
    },
  ];

  return (
    <div className="mt-10 w-full md:w-3/4 lg:w-1/2 m-auto">
      <div className="px-10">
        <h1 className="text-lg">WHAT&apos;S IMPORTANT TO US?</h1>
        <p className="text-sm">
          While many of the values we choose to live by as a school are evident
          from the Philosophy and Mission, the following four values are
          considered to be the core values of the School:
        </p>
      </div>

      <section className="grid grid-cols-1 grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-2">
        {infoData.map((item) => (
          <div
            key={item.header}
            className="max-w-screen-md mx-auto p-4 text-start"
          >
            <div className="flex items-center">
              <AiOutlineCheck className="text-red-500 mr-2 -mt-4" />
              <h2 className="text-base font-bold mb-4 inline">{item.header}</h2>
            </div>
            <p className="">{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ImportantSection;
