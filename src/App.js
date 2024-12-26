import './App.css';
import Repo from './components/Repo';
import Sidebar from './components/Sidebar';
import Repositries from './components/Repositries';
import LeftofSignin from './components/LeftofSignin';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/Component.css'
import SignIn from './components/Signin';
function App() {
  const [repos, setrepos] = useState([
    {
        title: 'design-system',
        badge: 'Public',
        platform: 'React',
        size: '7320 KB',
        updated_time: 'Updated 1 day ago',
    },
    {
        title: 'codeant-ci-app',
        badge: 'Private',
        platform: 'Javascript',
        size: '5871 KB',
        updated_time: 'Updated 2 days ago',
    },
    {
        title: 'analytics-dashboard',
        badge: 'Private',
        platform: 'Python',
        size: '4521 KB',
        updated_time: 'Updated 5 days ago',
    },
    {
        title: 'mobile-app',
        badge: 'Public',
        platform: 'Swift',
        size: '3096 KB',
        updated_time: 'Updated 3 days ago',
    },
    {
        title: 'e-commerce-platform',
        badge: 'Private',
        platform: 'Java',
        size: '6210 KB',
        updated_time: 'Updated 6 days ago',
    },
    {
        title: 'blog-website',
        badge: 'Public',
        platform: 'HTML/CSS',
        size: '1876 KB',
        updated_time: 'Updated 4 days ago',
    },
    {
        title: 'social-network',
        badge: 'Private',
        platform: 'PHP',
        size: '5432 KB',
        updated_time: 'Updated 7 days ago',
    },
]);

  return (
    // <Router>
    //   <div className="App">
    //     <Sidebar />
    //     <Routes>
    //       <Route path="/" element={<Repositries repos={repos} />} />
       
          
    //     </Routes>
    //   </div>
    // </Router>
    <SignIn/>
    
   
  );
}

export default App;
