import {useSelector} from "react-redux";
import CreatorInfo from "./CreatorInfo/CreatorInfo";
import PupuleresPosts from "./PupuleresPosts/PupuleresPosts";

const SideBar = ({post}) => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center shadow-md p-2 w-80 hidden md:flex">
      <CreatorInfo post={post} />
      <PupuleresPosts />
    </div>
  );
};

export default SideBar;
/*       <PupuleresPosts posts={posts} />
 */
