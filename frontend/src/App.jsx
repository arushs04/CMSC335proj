import NavigationBar from './Functionality/NavigationBar.jsx'
import {Route,Routes} from 'react-router-dom'
import Footer from "./Functionality/Footer.jsx"
import Home from "./Pages/Home.jsx"
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import PostPageDetails from './Pages/PostPageDetails.jsx'
import WritePost from './Pages/WritePost.jsx'
import EditPost from './Pages/EditPost.jsx'

import { UserContextProvider } from './Context/UserContext.jsx'
import MyBlogs from './Pages/MyBlogs.jsx'
import Health from './Pages/Health.jsx'
import Tech from './Pages/Technology.jsx'
import News from './Pages/News.jsx'
import APIpage from './Pages/APIpage.jsx'

//Routing all the app elements to a location on the webpage

const App = () => {
  return (
  
    <UserContextProvider>
    <NavigationBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/health" element={<Health/>}/>
        <Route exact path="/technology" element={<Tech/>}/>
        <Route exact path="/news" element={<News/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/write" element={<WritePost/>}/>
        <Route exact path="/posts/post/:id" element={<PostPageDetails/>}/>
        <Route exact path="/myblogs/:id" element={<MyBlogs/>}/>
        <Route exact path="edit/:id" element={<EditPost/>}/>
        <Route exact path="/APIpage" element={<APIpage/>}/>
      </Routes>
    <Footer/>
    </UserContextProvider>
  
  )
}
export default App