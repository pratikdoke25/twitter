import { Grid } from "@mui/material";
import Navigation from "./Navigation/Nevigation";
import HomeSection from "./HomeSection/HomeSection";
import RightSection from "./RightSection/RightSection";
import { Route ,Routes} from "react-router-dom";
import Profile from "./Profile/Profile";
import TweetDetails from "./TweetDetails/TweetDetails";
const Homepage = () => {
  return (
    <Grid container item xs={12} className="px-5 lg:px-36 justify-between">
      <Grid item xs={0} lg={2.5} className="lg:block w-full relative">
        <Navigation />
      </Grid>
      <Grid item xs={12} lg={6} className="px-5 lg:px-9  lg:block w-full relative">
        <Routes>
          <Route path="/" element={<HomeSection />}></Route>
          <Route path="/home" element={<HomeSection />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/tweet/:id" element={<TweetDetails />}></Route>
        </Routes>

      </Grid>
      <Grid item xs={0} lg={3} className=" lg:block w-full relative">
        <RightSection />
      </Grid>
    </Grid>
  );
};

export default Homepage;
