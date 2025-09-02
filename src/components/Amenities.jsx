import { Snowflake, Sparkles, Users, ClipboardList } from "lucide-react";


const Amenities = () => {
    const amenities = [
    { icon: <Snowflake size={36} className="text-secondary duration-200 transition-colors group-hover:text-white " />, title: "AC Classrooms" },
    { icon: <Sparkles size={36} className="text-secondary duration-200 transition-colors group-hover:text-white" />, title: "Clean Premises" },
    { icon: <Users size={36} className="text-secondary duration-200 transition-colors group-hover:text-white" />, title: "Expert Faculty" },
    { icon: <ClipboardList size={36} className="text-secondary duration-200 transition-colors group-hover:text-white" />, title: "Periodic Evaluation" },
  ];
   return (
    <section className="mt-16">
      <div className="w-11/12 max-w-[1080px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {amenities.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-sm group hover:bg-secondary duration-200 flex flex-col items-center justify-center p-6 transition-all hover:scale-105"
          >
            {item.icon}
            <h3 className="mt-3 text-lg font-semibold text-gray-800 duration-200 transition-colors group-hover:text-white text-center">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Amenities