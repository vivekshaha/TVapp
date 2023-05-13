import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowListPage from "./Pages/ShowsList.Page";
import ShowDetailsPage from "./Pages/ShowDetails.Page";
import AvatarGroups from "./Components/GroupAvatars";

function App() {
  return (
    <div className="max-w-5xl mx-auto ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowListPage />} />
          <Route path="show/:show_id" element={<ShowDetailsPage />} />
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
