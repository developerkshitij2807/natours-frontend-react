//React In-Built Modules
import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

//Custom CSS
import './styles/style.css';

//Components
import MainPage from './Components/MainPageComponent/MainPage';
import TourPage from './Components/TourPageComponent/TourPage';
import AllToursPage from './Components/AllToursPageComponent/AllToursPage';
import AuthorizationLayout from './Components/AuthorizationPages/AuthorizationLayout';

//data
import tours from './Components/AllToursPageComponent/ToursData';

function App() {
  return (
    <Router>
      <Route exact path='/' component={MainPage} />
      <Route path='/tours' component={AllToursPage} />
      <Route exact path='/login'>
        <AuthorizationLayout type={'login'} />
      </Route>
      <Route exact path='/signup'>
        <AuthorizationLayout type={'signup'} />
      </Route>
      <Route exact path='/signup'>
        <AuthorizationLayout type={'signup'} />
      </Route>
      {tours.map((tour) => (
        <Route key={tour._id} exact path={`/tour/${tour.slugURL}`}>
          <TourPage tourData={tour} />
        </Route>
      ))}
    </Router>
  );
}

export default App;
