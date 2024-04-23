// material-ui
import { Typography } from "@mui/material";

// project imports
import MainCard from "../../ui-component/cards/MainCard";
import RecommendationTab from "./recommendationTab-page";

// ==============================|| RECOMMENDATION PAGE ||============================== //

const RecommendationPage = () => (
  <MainCard title="Conseils Nutrition & Entraînement">
    <Typography variant="body2">
      <RecommendationTab />
    </Typography>
  </MainCard>
);

export default RecommendationPage;
