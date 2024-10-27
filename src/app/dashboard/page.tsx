// Components
import LoginWorker from "@/app/components/LoginWorker";
import SideMenu from "../components/SideMenu";
import Tasks from "../components/Tasks";
import CompletedTasks from "../components/CompletedTasks";
import Calendar from "../components/Calendar";
import WorkersAvailable from "../components/WorkersAvailable";
import CircleImage from "../components/CircleImage";
import Elder from "../components/Elder";
import SearchBar from "../components/SearchBar";
import Navbar from "@/app/components/Navbar";

// Images
import SpencerImage from "@/app/img/spencerimg.jpeg";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 w-11/12 h-dvh p-6 mt-2 rounded-3xl flex justify-center justify-self-center ">
        <div className="w-full grid grid-cols-4 grid-rows-6 gap-1 ">
          <LoginWorker>
            <div className="row-start-1 row-span-1 bg-white w-full h-32 text-center rounded-lg flex justify-center items-center justify-self-center self-end">
              <CircleImage image={SpencerImage} />
              <p className="w-1/2 ml-2 text-sm font-bold">Spencer Sedano</p>
            </div>
          </LoginWorker>
          <SideMenu>
            <div className="row-start-2 row-span-6 bg-white w-full h-full rounded-lg flex justify-center items-center justify-self-center">
              <h1>Side Menu</h1>
            </div>
          </SideMenu>
          <SearchBar>
            <div className="col-start-2 col-span-3 bg-white w-full h-32 text-center rounded-lg flex justify-center items-center justify-self-center self-end">
              <h1>Search</h1>
            </div>
          </SearchBar>
          <Tasks>
            <div className="row-start-2 row-span-3 bg-white w-full h-full rounded-lg flex justify-center items-center justify-self-center">
              <h1>Tasks</h1>
            </div>
          </Tasks>
          <Elder>
            <div className="row-start-5 row-span-2 col-span-2 bg-white w-full h-full rounded-lg flex justify-center items-center justify-self-center">
              <h1>Elder</h1>
            </div>
          </Elder>
          <CompletedTasks>
            <div className="row-start-2 row-span-3 bg-white w-full h-full rounded-lg flex justify-center items-center justify-self-center">
              <h1>Completed Tasks</h1>
            </div>
          </CompletedTasks>
          <Calendar>
            <div className="row-start-2 row-span-3 bg-white w-full h-full rounded-lg flex justify-center items-center justify-self-center">
              <h1>Calendar</h1>
            </div>
          </Calendar>

          <WorkersAvailable>
            <div className="row-start-5 row-span-2 bg-white w-full h-full rounded-lg flex justify-center items-center justify-self-center">
              <h1>Workers Available</h1>
            </div>
          </WorkersAvailable>
        </div>
      </div>
    </>
  );
}
