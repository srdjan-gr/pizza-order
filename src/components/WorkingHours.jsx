import location from "../../public/images/pizza-neon.jpg";
import { workinHours } from "@/app/applicationData";

const WorkingHours = () => {
  return (
    <section
      style={{ backgroundImage: `url(${location.src})` }}
      className="h-[600px] max-w-[1440px] m-auto rounded-3xl bg-cover bg-center bg-no-repeat relative mb-5"
    >
      <div className="w-full h-[600px] bg-gray-500/10 rounded-3xl"></div>

      <div className="w-full absolute top-10 left-0 z-10 text-white text-center">
        <h2 className="text-4xl font-ibm mb-2">Working hours</h2>

        <p className="text-lg mb-14 ">
          Our working hours for online order or visit.
        </p>
      </div>

      <div className="w-[340px] absolute top-40 left-48 z-10 text-white">
        <div className="">
          <table className="table">
            <tbody>
              {workinHours.map((item) => {
                return (
                  <tr className="border-white/10">
                    <td className="text-center">{item.day}</td>
                    <td className="text-center">{item.hours}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WorkingHours;
