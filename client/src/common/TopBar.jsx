import {
  AiFillFacebook,
  AiFillHourglass,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const TopBar = () => {
  return (
    <header className="flex justify-center gap-6 sm:justify-between items-center bg-[#ffc265]  sm:px-20 w-full py-4 sm:py-2 text-[#000]">
      <a href="#" className="hidden absolute sm:block sm:static">
        <div className="flex  gap-2 items-start ">
          <img src="/test.png" className="w-32" alt="iqraa" />
        </div>
      </a>
      <a
        target="blank"
        href="https://www.facebook.com/profile.php?id=100090853364224"
        className="flex justify-center items-center gap-2 "
      >
        <AiFillFacebook className="text-3xl sm:text-6xl" />
        <div className="flex flex-col text-center text-xs md:text-lg">
          <p className="font-bold text-[#4caf50]">Facebook</p>
        </div>
      </a>

      <a
        target="blank"
        href="http://wa.me/+201012750418"
        className="flex items-center gap-2 "
      >
        <AiOutlineWhatsApp className="text-3xl sm:text-6xl" />
        <div className="flex flex-col text-center text-xs md:text-lg">
          <p className="text-xs sm:text-md sm:font-bold">+201012750418</p>
          <p className="text-[#4caf50] font-bold">whatsapp</p>
        </div>
      </a>
      <div className="flex items-center gap-2 ">
        <AiFillHourglass className="text-3xl sm:text-6xl" />
        <div className="flex flex-col text-center text-xs md:text-lg">
          <p className="text-xs sm:text-md sm:font-bold">24/7</p>
          <p className="font-bold text-[#4caf50]">Open</p>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
