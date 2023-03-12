import React from "react";
import {Link} from "react-router-dom";

const PupuleresPosts = () => {
  const PupulerPost = ({post}) => {
    return (
      <Link to={`/blogs/${post._id}`} className="flex gap-4">
        <img src={post.selectedFile} alt="post" className="w-40 rounded-xl" />
        <div className="flex flex-col gap-2 max-w-60">
          <h3 className="text-sm">{post.title}</h3>
          <p className="text-xs">{post.message.slice(0, 40)}...</p>
        </div>
      </Link>
    );
  };
  const post = {
    userImage: "/download.jpg",
    name: "Mahmoud",
    createdAt: "2022/12/3",
    message: `Allah says (interpretation of the meaning) Say: If the mankind and
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
            every third night.`,
    comments: [],
    selectedFile:
      "https://res.cloudinary.com/dihhlmkrf/image/upload/v1678308674/islamiq/vecteezy_verses-of-the-holy-quran_6034228_263_anazif.jpg",
    title: " 10 Top Tips To Memorize Quran",
  };
  const post2 = {
    userImage: "/download.jpg",
    name: "admin",
    createdAt: "2022/12/3",
    message: `Allah says (interpretation of the meaning) Say: If the mankind and
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
            every third night.`,
    comments: [],
    selectedFile:
      "https://res.cloudinary.com/dihhlmkrf/image/upload/v1678308417/islamiq/learn-to-read-quran-for-adults_ewcc4j.jpg",
    title: " 10 Top Tips To Memorize Quran",
  };
  const post3 = {
    userImage: "/download.jpg",
    name: "admin",
    createdAt: "2022/12/3",
    message: `Allah says (interpretation of the meaning) Say: If the mankind and
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
            every third night.`,
    comments: [],
    selectedFile:
      "https://res.cloudinary.com/dihhlmkrf/image/upload/v1678308704/islamiq/mohammed-300x300_qkp1eq.jpg",
    title: " 10 Top Tips To Memorize Quran",
  };
  return (
    <div id="popular_posts" className="flex flex-col gap-2">
      <h4>Recent blogs</h4>
      <hr />
      <div className="flex flex-col gap-8">
        <PupulerPost post={post2} />
        <PupulerPost post={post3} />
      </div>
    </div>
  );
};

export default PupuleresPosts;
