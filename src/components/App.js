import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import FeedbackList from './FeedbackList';
import FeedbackStats from './FeedbackStats';
import FeedbackForm from './FeedbackForm';
import AboutIconLink from './AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

export default function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text="Hello World" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}
