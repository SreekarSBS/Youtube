export const MENU_ICON_URL = "https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
export const YT_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
export const itemsDefault = ["Home", "Shorts", "Subscriptions", "Music"];
export const itemsYou = ["History", "Playlists", "Your Videos", "Your Courses", "Watch Later", "Liked videos"];
export const itemsExplore = ["Shopping", "Music", "Movies", "Live", "Gaming"];
export const categories= [

    "All"
    ,
   " Telugu cinema"
    ,
    "Music"
    ,
    "Mixes"
    ,
    "Gaming"
    ,
    "Thrillers"
    ,
    "Science fiction"
    ,
    "Sahasranama"
    ,
    "Computer programming"
    ,
    "Sitcoms"
    ,
    "Mantras"
    ,
    "Live"
    ,
    "Presentations"
    ,
    "Consumer Electronics"
    ,
    "Recently uploaded"
    ,
    "Watched"
    ,
   " New to you"
    ]
export const YT_API_DATA = "https:youtube.googleapis.com/youtube/v3/videos?maxResults=20&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" + import.meta.env.VITE_API_KEY

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_API_KEY
    }
  };