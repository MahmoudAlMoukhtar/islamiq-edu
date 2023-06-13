import {motion} from "framer-motion";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {BsCheck} from "react-icons/bs";
import {ImRadioUnchecked} from "react-icons/im";
import ChoosePackages from "./ChoosePackages";

const packages = {
  family: {
    titleEN: "FAMILY",
    titleAR: "العائلة",
    feachersAr: [
      "هذه الباقة تناسبك عندما يلتحق بنا ثلاثة أعضاء من عائلتك",
      "٣٠ دقيقة لكل جلسة لكل فرد",
      "٨ جلسات خلال الشهر لكل فرد",
      "معلمين عرب.",
      "مرونة في تحديد المواعيد",
    ],
    feachers: [
      "When 3 members from your family join us this package will fit you",
      "Your are saving $30",
      "30 Min per session for everyone",
      "8 Sessions per month for everyone",
      "Native teachers",
      "Flexible time schedule",
    ],
  },
  economic: {
    titleEN: "ECONOMIC",
    titleAR: "اقتصادي",
    feachersAr: [
      "أنت توفر ٦٠ دولارًا من الجلسات شهريًا",
      "٢٠ جلسة خلال الشهر",
      "ساعة لكل جلسة",
      "٤ جلسات خلال الأسبوع",
      "معلمين عرب.",
      "مرونة فى تحديد المواعيد",
    ],
    feachers: [
      "You are saving $60 Sessions per month",
      "20 Sessions per month",
      "60 Min per session",
      "4 Session per week",
      "Native teachers",
      "Flexible time schedule",
    ],
  },
  static: {
    titleEN: "start",
    titleAR: "البداية",
    feachersAr: [
      "أنت توفر 10$",
      "١٢ جلسة بالشهر",
      "ثلاثون دقيقة لكل جلسة",
      "ثلاث جلسات فس الأسبوع لكل",
      "معلمين عرب",
      "مرونة فى تحديد المواعيد",
    ],
    feachers: [
      "You are saving $10",
      "12 Sessions per Month",
      "30 Min per sesstion",
      "3 Sessions per week",
      "Native teachers",
      "Flexible time schedule",
    ],
  },
  childern: {
    titleEN: "Childern",
    titleAR: "أطفال",
    feachersAr: [
      "١٢ جلسة في الشهر",
      "١٥ دقيقة فى الجلسة",
      "٣ جلسات خلال الأسبوع",
      "أدوات تفاعلية كالألعاب والقصص والرسومات",
      "صمم خصيصا للأطفال من عمر ٤_٦ سنوات",
      "معلمين عرب",
      "مرونة فى تحديد المواعيد",
    ],
    feachers: [
      "12 sesstion per month",
      "15 min per sesstion",
      "3 sessions per week",
      "Interactive tools such as Games,stories, and drawings",
      "Especially for kids from 4-6 year old",
      "Native teachers",
      "Flexible time schedule",
    ],
  },
};

const PackagesC = () => {
  const [t, i18n] = useTranslation();
  const [selectedPackage, setSelectedPackage] = useState("family");

  return (
    <div
      className={
        i18n.language === "en"
          ? "flex flex-col-reverse md:flex-row gap-10 justify-center w-full px-4  sm:px-10  lg:px-20"
          : "flex flex-col md:flex-row-reverse gap-10 justify-center w-full px-4  sm:px-10  lg:px-20"
      }
    >
      <div
        id="details_package"
        className={
          i18n.language === "en"
            ? "flex flex-col gap-6 w-full text-white font-semibold p-4"
            : "flex flex-col items-end  gap-6 w-full text-white font-semibold p-4"
        }
      >
        <div
          className={
            i18n.language === "en"
              ? "flex flex-col gap-2 sm:flex-row items-center justify-between w-full"
              : "flex flex-col gap-2 sm:flex-row-reverse items-center justify-between w-full"
          }
        >
          <h4 className="text-lg sm:text-2xl">
            {i18n.language === "en"
              ? "Details Package Selected"
              : "تفاصيل الباقة المُختارة "}
          </h4>
          <div className="flex items-center gap-2 text-black w-full sm:w-auto">
            <button className="hover:bg-[#fd5308] bg-[#fd5308] py-2 px-4 rounded-full w-full sm:w-auto">
              {i18n.language === "en" ? "Monthly" : "شهري"}
            </button>
          </div>
        </div>
        {selectedPackage === "family" &&
          (i18n.language === "en"
            ? packages.family.feachers.map(f => (
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.7}}
                  className={
                    i18n.language === "en"
                      ? "flex items-center justify-between w-full  p-2 gap-2"
                      : "flex flex-row-reverse items-center justify-between w-full  p-2 gap-2 text-end"
                  }
                  style={{textTransform: "capitalize"}}
                  key={f}
                >
                  <p className="text-sm sm:text-lg font-semibold">{f}</p>
                  <div className="bg-[#fd5308] rounded-full">
                    <BsCheck size={25} />
                  </div>
                </motion.div>
              ))
            : packages.family.feachersAr.map(f => (
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.7}}
                  className={
                    i18n.language === "en"
                      ? "flex items-center justify-between w-full  p-2 gap-2"
                      : "flex flex-row-reverse items-center justify-between w-full  p-2 gap-2 text-end"
                  }
                  style={{textTransform: "capitalize"}}
                  key={f}
                >
                  <p className="text-sm sm:text-lg font-semibold">{f}</p>
                  <div className="bg-[#fd5308] rounded-full">
                    <BsCheck size={25} />
                  </div>
                </motion.div>
              )))}

        {selectedPackage === "economic" &&
          (i18n.language === "en"
            ? packages.economic.feachers.map(f => (
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.7}}
                  className={
                    i18n.language === "en"
                      ? "flex items-center justify-between w-full  p-2 gap-2"
                      : "flex flex-row-reverse items-center justify-between w-full  p-2 gap-2 text-end"
                  }
                  style={{textTransform: "capitalize"}}
                  key={f}
                >
                  <p className="text-sm sm:text-lg font-semibold">{f}</p>
                  <div className="bg-[#fd5308] rounded-full">
                    <BsCheck size={25} />
                  </div>
                </motion.div>
              ))
            : packages.economic.feachersAr.map(f => (
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.7}}
                  className={
                    i18n.language === "en"
                      ? "flex items-center justify-between w-full  p-2 gap-2"
                      : "flex flex-row-reverse items-center justify-between w-full  p-2 gap-2 text-end"
                  }
                  style={{textTransform: "capitalize"}}
                  key={f}
                >
                  <p className="text-sm sm:text-lg font-semibold">{f}</p>
                  <div className="bg-[#fd5308] rounded-full">
                    <BsCheck size={25} />
                  </div>
                </motion.div>
              )))}
        {selectedPackage === "start" &&
          (i18n.language === "en"
            ? packages.static.feachers.map(f => (
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.7}}
                  className={
                    i18n.language === "en"
                      ? "flex items-center justify-between w-full  p-2 gap-2"
                      : "flex flex-row-reverse items-center justify-between w-full  p-2 gap-2 text-end"
                  }
                  style={{textTransform: "capitalize"}}
                  key={f}
                >
                  <p className="text-sm sm:text-lg font-semibold">{f}</p>
                  <div className="bg-[#fd5308] rounded-full">
                    <BsCheck size={25} />
                  </div>
                </motion.div>
              ))
            : packages.static.feachersAr.map(f => (
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.7}}
                  className={
                    i18n.language === "en"
                      ? "flex items-center justify-between w-full  p-2 gap-2"
                      : "flex flex-row-reverse items-center justify-between w-full  p-2 gap-2 text-end"
                  }
                  style={{textTransform: "capitalize"}}
                  key={f}
                >
                  <p className="text-sm sm:text-lg font-semibold">{f}</p>
                  <div className="bg-[#fd5308] rounded-full">
                    <BsCheck size={25} />
                  </div>
                </motion.div>
              )))}

        {selectedPackage === "childern" &&
          (i18n.language === "en"
            ? packages.childern.feachers.map(f => (
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.7}}
                  className={
                    i18n.language === "en"
                      ? "flex items-center justify-between w-full  p-2 py-0 gap-2"
                      : "flex flex-row-reverse items-center justify-between w-full  p-2 py-0 gap-2 text-end"
                  }
                  style={{textTransform: "capitalize"}}
                  key={f}
                >
                  <p className="text-sm sm:text-lg font-semibold">{f}</p>
                  <div className="bg-[#fd5308] rounded-full">
                    <BsCheck size={25} />
                  </div>
                </motion.div>
              ))
            : packages.childern.feachersAr.map(f => (
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.7}}
                  className={
                    i18n.language === "en"
                      ? "flex items-center justify-between w-full  p-2 gap-2"
                      : "flex flex-row-reverse items-center justify-between w-full  p-2 gap-2 text-end"
                  }
                  style={{textTransform: "capitalize"}}
                  key={f}
                >
                  <p className="text-sm sm:text-lg font-semibold">{f}</p>
                  <div className="bg-[#fd5308] rounded-full">
                    <BsCheck size={25} />
                  </div>
                </motion.div>
              )))}
      </div>
      <ChoosePackages
        setSelectedPackage={setSelectedPackage}
        selectedPackage={selectedPackage}
      />
    </div>
  );
};

export default PackagesC;
