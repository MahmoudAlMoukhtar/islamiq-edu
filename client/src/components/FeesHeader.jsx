import {useTranslation} from "react-i18next";

const FeesHeader = () => {
  const [t, i18n] = useTranslation();
  return (
    <div className="flex w-full justify- flex-wrap lg:flex-nowrap gap-2 px-4 sm:px-10 lg:px-20">
      <div
        className={
          i18n.language === "en"
            ? "text-sm sm:text-md font-semibold text-black text-center pt-2 sm:pt-4 px-4 sm:px-8 w-full lg:w-1/2 bg-[#ffc265] py-4 rounded"
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
      </div>
      <div
        className={
          i18n.language === "en"
            ? "text-sm sm:text-md font-semibold text-black text-center pt-2 sm:pt-4 px-4 sm:px-8  w-full lg:w-1/2 bg-[#ffc265] py-4 rounded"
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
      </div>
    </div>
  );
};

export default FeesHeader;
