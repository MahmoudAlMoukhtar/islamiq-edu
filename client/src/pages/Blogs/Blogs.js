import {useTranslation} from "react-i18next";

const BlogsPage = () => {
  const [t, i18n] = useTranslation();
  return (
    <section
      id="blogs-page"
      className="flex flex-col  justify-center items-center gap-10 py-10 bg-[#f2ede7] w-full my-40"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold text-center">{t("titleblogs")}</h2>
        <span className="h-2 w-40 bg-[#ffc265]" />
      </div>
      <div className="flex gap-20 sm:gap-4 justify-center items-center flex-wrap w-full px-4 sm:px-20">
        <div className="flex flex-col items-start justify-center gap-10 w-96 rounded shadow-xl text-start  sm:h-[550px] hover:scale-105 transtion duration-200">
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dihhlmkrf/image/upload/v1678308417/islamiq/learn-to-read-quran-for-adults_ewcc4j.jpg"
            className="w-full h-[250px] rounded-t-md"
          />
          <div className="flex flex-col  items-start gap-10 text-start h-full px-4">
            <p className="text-2xl font-semibold">
              10 Top Tips To Memorize Quran
            </p>
            <p>
              Memorizing Quran is a great spiritual, physical, and mental
              journey that enlightens your heart, mind, and whole life. That’s
              why you see Muslims across the
            </p>
            <button className="rounded bg-[#FF932D] py-2 px-4 w-full">
              See more
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-10 w-96 rounded shadow-xl text-start  sm:h-[550px] hover:scale-105 transtion duration-200">
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dihhlmkrf/image/upload/v1678308704/islamiq/mohammed-300x300_qkp1eq.jpg"
            className="w-full h-[250px] rounded-t-md"
          />
          <div className="flex flex-col  items-start gap-10 text-start h-full px-4">
            <p className="text-2xl font-semibold">
              10 Top Tips To Memorize Quran
            </p>
            <p>
              Memorizing Quran is a great spiritual, physical, and mental
              journey that enlightens your heart, mind, and whole life. That’s
              why you see Muslims across the
            </p>
            <button className="rounded bg-[#FF932D] py-2 px-4 w-full">
              See more
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-10 w-96 rounded shadow-xl text-start  sm:h-[550px] hover:scale-105 transtion duration-200">
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dihhlmkrf/image/upload/v1678309219/islamiq/5-pillars-of-Islam-300x300_bpu107.jpg"
            className="w-full h-[250px] rounded-t-md"
          />
          <div className="flex flex-col  items-start gap-10 text-start h-full px-4">
            <p className="text-2xl font-semibold">
              10 Top Tips To Memorize Quran
            </p>
            <p>
              Memorizing Quran is a great spiritual, physical, and mental
              journey that enlightens your heart, mind, and whole life. That’s
              why you see Muslims across the
            </p>
            <button className="rounded bg-[#FF932D]  py-2 px-4 w-full">
              See more
            </button>
          </div>
        </div>
      </div>
      <button className="flex gap-2 items-center bg-[#FF932D] rounded-full py-4 px-8 font-bold">
        {t("titleblogs")}
      </button>
    </section>
  );
};

export default BlogsPage;
