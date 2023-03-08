import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import Spinner from "../../Spinner";
import Rating from "../../components/Rating";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductByIdAction} from "../../redux/actions/productsActions";
import {addProductCartAction} from "../../redux/actions/cart";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BeatLoader from "react-spinners/BeatLoader";
import {AiOutlineWhatsApp} from "react-icons/ai";

const DetaiTajweedlCourse = () => {
  //react router
  const {id} = useParams();
  const navigate = useNavigate();
  const {loadingProduct, product} = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductByIdAction(id));
  }, []);

  //return jsx UI product
  //if (loadingProduct) return <Spinner />;
  return (
    <div className="flex justify-between gap-10 w-full my-20  px-20 py-10">
      <div className="flex flex-col justify-center items-start gap-20  text-black w-full shadow-2xl p-4 rounded">
        <h2 className="text-center text-5xl font-bold w-full">
          {"Quran Tafser".toUpperCase()}
        </h2>
        <div className="flex flex-col items-center gap-10 w-full">
          <img src="/Quran-4.jpg" className="w-full rounded" alt="course" />
          <p className="text-2xl">
            “The Reading”, is a confirmation of the Torah and the Bible, and it
            affirms, confirms and repeats the Faith and the Law that was sent in
            them both. The Faith and the Law that were sent in them have been
            corrupted. The Arabic Quran, which cannot be adulterated, has today
            been surrounded by absolute lies attributed to Mohammad outside the
            Quran and usually referred to as “Ahadith” or “Stories”, and
            “Sunnah” or “Method”. The Quran, which is The Story or “The Hadith”,
            is absolutely self sufficient in explaining itself, otherwise it
            would be from other than Allah. The Quran confirms what has passed
            before and points to what is to come. Two major events, first a
            Punishment will come, then the Hour when the Earth, Sun, and Moon as
            we know it will cease to exist.
          </p>
        </div>
        <div className="flex flex-col items-center gap-10 w-full">
          <img
            src="/pexels-ahmed-aqtai-2233416.jpg"
            className="w-full rounded"
            alt="course"
          />
          <p className="text-2xl">
            The Quran revolves around the explanation of how the God dealt with
            seven generations and people before us. The Seven Major Examples in
            chronological order: the people of Noah, Hud, Saleh, Abraham, Lot,
            Shuaib, Moses and Pharaoh. The Quran clearly states that all true
            believers are followers of Abraham and he is their father. Contrary
            to the belief of the so-called Muslims today who are not Muslims,
            Mohammad is a follower of the Nation of Abraham true. The Messiah
            Jesus, son of Mary, Messenger of the God, and His Word, was not
            killed, was not crucified, and will return and be amongst Mankind as
            a knowledge to the Hour.
          </p>
        </div>
        <div className="flex flex-col items-center gap-10 w-full">
          <img
            src="/learn-to-read-quran-for-adults.jpg"
            className="w-full rounded"
            alt="course"
          />
          <p className="text-2xl">
            The Quran revolves around the explanation of how the God dealt with
            seven generations and people before us. The Seven Major Examples in
            chronological order: the people of Noah, Hud, Saleh, Abraham, Lot,
            Shuaib, Moses and Pharaoh. The Quran clearly states that all true
            believers are followers of Abraham and he is their father. Contrary
            to the belief of the so-called Muslims today who are not Muslims,
            Mohammad is a follower of the Nation of Abraham true. The Messiah
            Jesus, son of Mary, Messenger of the God, and His Word, was not
            killed, was not crucified, and will return and be amongst Mankind as
            a knowledge to the Hour.
          </p>
        </div>
        <div className="flex flex-col items-center gap-10 w-full">
          <img
            src="/vecteezy_verses-of-the-holy-quran_6034228_263.jpg"
            className="w-full rounded"
            alt="course"
          />
          <p className="text-2xl">
            Allah says (interpretation of the meaning) Say: If the mankind and
            the jinn were together to produce the like of this Quran, they could
            not produce the like thereof, even if they helped one another’[Quran
            Al-Israa’ 17:88] Had We sent down this Quran on a mountain, you
            would surely have seen it humbling itself and rending asunder by the
            fear of Allah. Such are the parables which We put forward to mankind
            that they may reflect. [Quran Al-Hashr 59:21] 1.“This is the Book
            (the Quran), whereof there is no doubt, a guidance to those who are
            Al-Muttaqoon [the pious] [Quran Al-Baqarah 2:2] 2. The Rewards of
            Reciting Quran in Qiyaam Al-Layl (Night prayers before Fajr) We all
            know from the Quran and the Ahadeeth about the countless rewards and
            benefits of praying and reciting Quran during the nightly prayers
            (last one third of the night). As is stated in the hadeeth narrated
            by ‘Abd-Allah ibn ‘Amr ibn al-‘Aas (may Allah be pleased with them
            both), in which the Prophet (peace and blessings of Allah be upon
            him) said: Whoever recites ten aayaat (verses) in qiyaam will not be
            recorded as one of the forgetful. Whoever recites a hundred aayaat
            (verses) in qiyaam will be recorded as one of the devout, and
            whoever prays a thousand aayaat (verses) in qiyaam will be recorded
            as one of the muqantareen (those who pile up good deeds).” (Reported
            by Abu Dawood and Ibn Hibbaan. It is a hasan report. Saheeh
            al-Targheeb, 635). Imaam al-Bukhaari used to pray qiyaam and
            tahajjud at night until the time of suhoor, and he would read
            between a half and a third of the Quran, and complete it at suhoor
            every third night.
          </p>
        </div>
        <div className="flex flex-col items-center gap-10 w-full">
          <img
            src="/vecteezy_verses-of-the-holy-quran_6034228_263.jpg"
            className="w-full rounded"
            alt="course"
          />
          <p className="text-2xl">
            3.Reciting Quran in Ramadan Quran has even more of an important
            significance in the month of Ramadan, the month of fasting. Allah
            says (interpretation of the meaning)…. The month of Ramadan in which
            was revealed the Quran, a guidance for mankind and clear proofs for
            the guidance and the criterion (between right and wrong) [Quran
            al-Baqarah 2:185] Jibreel used to come to the Prophet (peace and
            blessings of Allah be upon him) every night in Ramadaan, and study
            the Quran with him. Narrated by al-Bukhaari. Hence the salaf used to
            read Quran a great deal during Ramadan, following the example of the
            Prophet (peace and blessings of Allah be upon him). Qataadah (may
            Allah have mercy on him) used to complete the Quran every seven
            nights all the time, and every three nights in Ramadaan, and every
            two nights during the last ten days of Ramadaan. Ibraaheem
            al-Nakha’i used to complete the Quran in Ramadaan every three
            nights, and in the last ten days every two nights. 4.General Rewards
            of Reciting Quran The rewards of reciting the Quran are many. An
            authentic hadith in At-Tirmithee states: Whoever reads a letter from
            the Book of Allah, he will have a reward. And that reward will be
            multiplied by ten. I am not saying that “Alif, Laam, Meem” is a
            letter, rather I am saying that “Alif” is a letter, “laam” is a
            letter and “meem” is a letter.” So increase your recitation of the
            Qur’an to gain these merits, and to gain the following merit as
            well. In another hadeeth, ‘Aa’ishah, may Allah be pleased with her,
            relates that the Prophet (sallAllahu ‘alaihi wa sallam) said: Verily
            the one who recites the Qur’an beautifully, smoothly, and precisely,
            he will be in the company of the noble and obedient angels. And as
            for the one who recites with difficulty, stammering or stumbling
            through its verses, then he will have TWICE that reward.”
            [Al-Bukhari and Muslim] This hadith proves that people who are not
            well versed in the Arabic languge or have other difficulties in
            reciting the Quran, get even a higher reward for reciting the Quran
            in Arabic for their extra effort.
          </p>
        </div>
        <ToastContainer theme="dark" />
      </div>
      <section className="flex flex-col items-center w-96 h-[1200px] gap-10 bg-[#34872A] p-4 rounded text-white text-center">
        <div className="flex flex-col items-center gap-4 shadow-lg p-2">
          <img src="/download.jpg" className="rounded-full w-40" />
          <h2 className="text-3xl font-bold">
            Teacher For <span className="text-4xl text-[#FF932D]">MALE</span>
          </h2>
          <h4 className="text-xl font-bold">Atia Salimullah Student</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </p>
          <a
            href="http://wa.me/+201012750418"
            target="blank"
            className="flex gap-2 items-center bg-[#FF932D]  py-4 px-8 font-bold rounded"
          >
            <div>
              <AiOutlineWhatsApp size={25} />
            </div>
            Whatsapp
          </a>
        </div>
        <div className="flex flex-col items-center gap-4 shadow-lg p-2">
          <img src="/download.jpg" className="rounded-full w-40" />
          <h2 className="text-3xl font-bold">
            Teacher For <span className="text-4xl text-[#FF932D]">FMALE</span>
          </h2>
          <h4 className="text-xl font-bold">Atia Salimullah Student</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </p>
          <a
            href="http://wa.me/+201012750418"
            target="blank"
            className="flex gap-2 items-center bg-[#FF932D]  py-4 px-8 font-bold rounded"
          >
            <div>
              <AiOutlineWhatsApp size={25} />
            </div>
            Whatsapp
          </a>
        </div>
      </section>
    </div>
  );
};
export default DetaiTajweedlCourse;
