const collaborations = [
  {
    title: "Instagram",
    value: "@_bagasui",
  },
  {
    title: "Email",
    value: "bagasui2@gmail.com",
  },
  {
    title: "Github",
    value: "Bagas-32",
  },
];

export default function CollaborationList() {
  return (
    <div className="px-[5%] grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      {collaborations.map((item) => (
        <div key={item.title}>
          <h3 className="text-2xl font-semibold text-black">{item.title}</h3>

          <p className="text-xl text-gray-500 mt-2">{item.value}</p>
        </div>
      ))}
    </div>
  );
}