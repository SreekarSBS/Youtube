import { VIDEO_BY_ID } from "@/utils/constants";
import { hideSidebar } from "@/utils/sidebarSlice";
import { useAppDispatch } from "@/utils/types";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
    const [params] = useSearchParams()
    
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(hideSidebar());
    fetchVideoById();
  }, []);

  const fetchVideoById = async () => {
    const res = await fetch(VIDEO_BY_ID);
    const jsonRes = await res?.json();
    console.log(jsonRes);
  };

  return (
    <div className="text-white h-screen w-screen  ">
        <div className="w-2/3 aspect-video">
  <iframe
    className="w-full h-full m-2 rounded-lg"
        src={`https://www.youtube.com/embed/${params.get('v')}?si=XkUbdxxLDYYqxrJ9`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;
