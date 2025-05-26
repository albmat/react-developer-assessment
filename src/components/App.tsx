import Home from '../pages/Home/Home';
import PostDetail from '../pages/Posts/PostDetail';
import Posts from '../pages/Posts/Posts';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/Theme';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from "react-error-boundary";
import { Error } from './Error/Error';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* Complete the exercise here. */}
      <ErrorBoundary fallback={<Error message='Something went wrong' />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
