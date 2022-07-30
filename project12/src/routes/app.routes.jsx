import { Routes, Route} from "react-router-dom";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { ReviewPreview } from "../pages/ReviewPreview";
import { CreateReview } from "../pages/CreateReview";

export function AppRoutes() {
 return(
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="profile" element={<Profile />} />
    <Route path="reviewpreview/:id" element={<ReviewPreview />} />
    <Route path="createreview" element={<CreateReview />} />
  </Routes>
 );
};