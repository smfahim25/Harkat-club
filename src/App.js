import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import HarkatBase from './components/HarkatBase/HarkatBase';
import ClubDetails from './components/LeftSidebar/ClubDetails';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Acchomplishment from './components/LeftSidebar/Acchomplishment';
import ContactGoveringBody from './components/LeftSidebar/ContactGoveringBody';
import MessageBox from './components/LeftSidebar/MessageBox';
import MembersRequest from './components/LeftSidebar/MembersRequest';
import Members from './components/LeftSidebar/Members';
import SkillsAvailable from './components/LeftSidebar/SkillsAvailable';
import SkillsLookingFor from './components/LeftSidebar/SkillsLookingFor';
import PostActivities from './components/LeftSidebar/PostActivities';
import CurrentActivities from './components/LeftSidebar/CurrentActivities';
import FutureActivity from './components/LeftSidebar/FutureActivity';
import ProposeActivity from './components/LeftSidebar/ProposeActivity';
import Pictures from './components/LeftSidebar/Pictures';
import Videos from './components/LeftSidebar/Videos';
import Announcements from './components/LeftSidebar/Announcements';
import News from './components/LeftSidebar/News';
import PromoteClub from './components/LeftSidebar/PromoteClub';
import UploadPost from './components/LeftSidebar/UploadPost';
import MyClubs from './components/MyClubs/MyClubs';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MyClubs />}></Route>
        <Route path='/club' element={<HarkatBase />}>
          <Route path='/club/:id' element={<NewsFeed />}></Route>
          <Route path='/club/newsfeed' element={<NewsFeed />}></Route>
          <Route path='/club/clubdetails' element={<ClubDetails />}></Route>
          <Route path='/club/acchomplishment' element={<Acchomplishment />}></Route>
          <Route path='/club/contactgoverningbody' element={<ContactGoveringBody />}></Route>
          <Route path='/club/messagebox' element={<MessageBox />}></Route>
          <Route path='/club/membersrequest' element={<MembersRequest />}></Route>
          <Route path='/club/members' element={<Members />}></Route>
          <Route path='/club/skillavailable' element={<SkillsAvailable />}></Route>
          <Route path='/club/skillfor' element={<SkillsLookingFor />}></Route>
          <Route path='/club/pastactivities' element={<PostActivities />}></Route>
          <Route path='/club/currentactivities' element={<CurrentActivities />}></Route>
          <Route path='/club/futureactivity' element={<FutureActivity />}></Route>
          <Route path='/club/proposeactivity' element={<ProposeActivity />}></Route>
          <Route path='/club/gallery' element={<Pictures />}></Route>
          <Route path='/club/videos' element={<Videos />}></Route>
          <Route path='/club/announcement' element={<Announcements />}></Route>
          <Route path='/club/news' element={<News />}></Route>
          <Route path='/club/promoteclub' element={<PromoteClub />}></Route>
          <Route path='/club/uploadpost' element={<UploadPost />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
