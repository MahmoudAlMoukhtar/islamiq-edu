import React, {useState} from "react";
import {motion} from "framer-motion";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {BsCheck} from "react-icons/bs";
import {ImRadioUnchecked} from "react-icons/im";
import {useTranslation} from "react-i18next";
const Fees = () => {
  const [t, i18n] = useTranslation();
  const [selectedPackage, setSelectedPackage] = useState("family");
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
        "ثلاثون دقيقة لكل جلسة",
        "ثلاث جلسات فس الأسبوع لكل",
        "معلمين عرب",
        "مرونة فى تحديد المواعيد",
      ],
      feachers: [
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
  const item = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      variants={item}
      id="fees"
      className="flex flex-col  justify-center items-center gap-10  py-10 bg-[#3cc4ad] w-full"
    >
      <div className={"flex flex-col items-center gap-4"}>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center px-2 sm:px-0">
          {t("titleFees")}
        </h2>
        <span className="h-1 sm:h-2 w-40 bg-[#ffc265]" />
        <div className="flex w-full justify- flex-wrap lg:flex-nowrap gap-2 px-4 sm:px-10 lg:px-20">
          <p
            className={
              i18n.language === "en"
                ? "text-sm sm:text-md font-semibold text-black text-center pt-2 sm:pt-4 px-4 sm:px-8 text-start w-full lg:w-1/2 bg-[#ffc265] py-4 rounded"
                : "text-sm sm:text-md font-semibold text-black pt-2 sm:pt-4 px-4 sm:px-8 text-end w-full lg:w-1/2 bg-[#ffc265] py-4 rounded"
            }
          >
            <h2 className="text-lg sm:text-lg font-semibold">
              {i18n.language === "en" ? `IQRA Arabic Quran` : "اقرأ عربي قرآن"}
            </h2>

            {i18n.language === "en"
              ? `welcomes students to join its engaging community anytime with
            affordable fees that suit each and every student.`
              : "اقرأ بسم الله ترحب بكم في عالمها المتحرك في أي وقت يأسعار تناسب جميع الطلاب"}
          </p>
          <p
            className={
              i18n.language === "en"
                ? "text-sm sm:text-md font-semibold text-black text-center pt-2 sm:pt-4 px-4 sm:px-8 text-start w-full lg:w-1/2 bg-[#ffc265] py-4 rounded"
                : "text-sm sm:text-md font-semibold text-black pt-2 sm:pt-4 px-4 sm:px-8 text-end w-full lg:w-1/2 bg-[#ffc265] py-4 rounded"
            }
          >
            <h2 className="text-lg sm:text-lg font-semibold">
              {i18n.language === "en" ? `Classes Fees:` : "أسعار الحصص"}
            </h2>
            {i18n.language === "en"
              ? `Payment is done in advance at the beginning of every month. Children
            can share one class with the same teacher, and parents just pay for
            one child only. Even a parent and a child can share the class with
            the same teacher with no extra fee.`
              : "يتم دفع الأجر في بداية كل شهرز يمكن للأطفال مشاركة الحصة مع الآباء لنفس المعلم دون أي مصاريف إضافية"}
          </p>
        </div>
      </div>
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
        <div className="w-full flex flex-col gap-4">
          <a
            href="#details_package"
            className="rounded-lg bg-[#EFEDD6] flex justify-between py-6 sm:py-4 px-2 sm:px-4 cursor-pointer"
            onClick={() => setSelectedPackage("childern")}
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#fff] rounded-full">
                {selectedPackage === "childern" ? (
                  <BsCheck color="black" size={30} />
                ) : (
                  <ImRadioUnchecked color="gray" size={30} />
                )}
              </div>
              <div className="flex flex-col items-start">
                <h5 className="text-xl sm:text-2xl font-semibold">
                  {i18n.language === "en" ? "CHILDERN" : "أطفال"}
                </h5>
                <h5 className="text-xl sm:text-2xl font-bold">
                  6 {i18n.language === "en" ? "HRS" : "ساعة"}
                </h5>
                <p className="bg-[#fff] rounded-full py-1 px-2 text-xs font-semibold">
                  {i18n.language === "en" ? "Save" : "وفّر"} $5
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm">
                <span className="text-2xl sm:text-4xl font-bold">$25</span>
                /Month
              </p>

              <span className="line-through	 text-lg sm:text-lg font-bold">
                $30
              </span>
            </div>
          </a>
          <a
            href="#details_package"
            className={
              "rounded-lg bg-[#f5cd9c] flex justify-between py-6 sm:py-4 px-2 sm:px-4 cursor-pointer"
            }
            onClick={() => setSelectedPackage("start")}
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#fff] rounded-full">
                {selectedPackage === "start" ? (
                  <BsCheck color="black" size={30} />
                ) : (
                  <ImRadioUnchecked color="gray" size={30} />
                )}
              </div>
              <div className="flex flex-col items-start">
                <h5 className="text-xl sm:text-2xl font-semibold">
                  {i18n.language === "en" ? "START" : "البداية"}
                </h5>
                <h5 className="text-xl sm:text-2xl font-bold">
                  6 {i18n.language === "en" ? "HRS" : "ساعة"}
                </h5>
                <p className="bg-[#fff] rounded-full py-1 px-2 text-xs font-semibold">
                  {i18n.language === "en" ? "Save" : "وفّر"} $10
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm">
                <span className="text-2xl sm:text-4xl font-bold">$50</span>
                /Month
              </p>

              <span className="line-through	 text-lg sm:text-lg font-bold">
                $60
              </span>
            </div>
          </a>
          <a
            href="#details_package"
            className="rounded-lg bg-[#ffc265] flex justify-between py-6 sm:py-4 px-4 cursor-pointer"
            onClick={() => setSelectedPackage("family")}
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#fff] rounded-full">
                {selectedPackage === "family" ? (
                  <BsCheck color="black" size={30} />
                ) : (
                  <ImRadioUnchecked color="gray" size={30} />
                )}
              </div>
              <div className="flex flex-col">
                <h5 className="text-xl sm:text-2xl font-semibold">
                  {i18n.language === "en" ? "FAMILY" : "العائلة"}
                </h5>
                <h5 className="text-xl sm:text-2xl font-bold">
                  12 {i18n.language === "en" ? "HRS" : "ساعة"}
                </h5>
                <p className="bg-[#fff] rounded-full py-1 px-2 text-xs font-semibold">
                  {i18n.language === "en" ? "Save" : "وفّر"} $30
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm">
                <span className=" text-2xl sm:text-4xl font-bold">$90</span>
                /Month
              </p>

              <span className="line-through	 text-lg sm:text-lg font-bold">
                $120
              </span>
            </div>
          </a>
          <a
            href="#details_package"
            className="rounded-lg bg-[#fd5308] flex justify-between py-6 sm:py-4 px-2 sm:px-4 cursor-pointer"
            onClick={() => setSelectedPackage("economic")}
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#fff] rounded-full">
                {selectedPackage === "economic" ? (
                  <BsCheck color="black" size={30} />
                ) : (
                  <ImRadioUnchecked color="gray" size={30} />
                )}
              </div>
              <div className="flex flex-col items-start">
                <h5 className="text-xl sm:text-2xl font-semibold">
                  {i18n.language === "en" ? "ECONOMIC" : "الاقتصادي"}
                </h5>
                <h5 className="text-xl sm:text-2xl font-bold">
                  20 {i18n.language === "en" ? "HRS" : "ساعة"}
                </h5>
                <p className="bg-[#fff] rounded-full py-1 px-2 text-xs font-semibold">
                  {i18n.language === "en" ? "Save" : "وفّر"} $60
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm">
                <span className="text-2xl sm:text-4xl font-bold">$140</span>
                /Month
              </p>

              <span className="line-through	 text-lg sm:text-lg font-bold">
                $200
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-bold text-white">
          {i18n.language === "en" ? "Customised plan" : "خطّة مخصّصة"}
        </h2>
        <span className="h-1 sm:h-2 w-40 bg-[#ffc265]" />
        <p className="text-[#fff]  text-md text-center sm:w-[600px] px-4 font-semibold">
          {i18n.language === "en"
            ? "We can offer you a customised plan if you wish. Please kindly fill in the contact form or contact us on any of this meens"
            : "نستطيع أيضاً عمل خطّة خاصة لك رجاءاً اتصل بنا أو راسلنا بإحدى طرق التواصل التالية"}
        </p>
        <div className="flex gap-2 flex-wrap sm:flex-wrap">
          <div className="flex gap-2 justify-center items-center bg-[#ffc265] rounded-full py-4 px-8 text-sm font-bold sm:font-bold w-full sm:w-auto text-center mx-2 sm:mx-0">
            iqraarabicquran@gmail.com
          </div>
          <a
            href="http://wa.me/+201012750418"
            target="blank"
            className="flex gap-2 justify-center items-center bg-[#fd5308] rounded-full py-4 px-8 text-sm font-bold sm:font-bold w-full sm:w-auto text-cente mx-2 sm:mx-0"
          >
            <div>
              <AiOutlineWhatsApp size={25} />
            </div>
            {i18n.language === "en" ? "Whatsapp" : "الواتساب"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Fees;
