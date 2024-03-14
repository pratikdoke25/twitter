import { Grid } from "@mui/material";
import Navigation from "./Navigation/Nevigation";
import HomeSection from "./HomeSection/HomeSection";

const Homepage = () => {
  return (
    <Grid container item xs={12} className="px-5 lg:px-36 justify-between">
      <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
        <Navigation/>
      </Grid>
      <Grid item xs={12} lg={6} className="hidden lg:block w-full relative">
        <HomeSection/>
      </Grid>
      <Grid item xs={0} lg={3} className="hidden lg:block w-full relative">
        <p className="text-center">This Right part</p>
      </Grid>
    </Grid>
  );
};

export default Homepage;
