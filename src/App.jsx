import { Route, Routes } from "react-router-dom";
import Collab from "./Pages/Collab";
import Profile from "./Pages/Profile/Profile";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/collab" element={<Collab />} />
        <Route path="/" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
