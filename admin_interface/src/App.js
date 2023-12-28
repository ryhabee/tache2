import Courses from './course'
import CreateCourse from './createCourse'
import Header from './header'
import './App.css';


const App = () => {
  return (
    <div>
        
      <Header/>
      <Courses />
      <CreateCourse />

    </div>
  );
};

export default App;
