import Home from '../pages/Home/Home';
import PostDetail from '../pages/Posts/PostDetail';
import Posts from '../pages/Posts/Posts';
import style, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/Theme';
import { Routes, Route, Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* Complete the exercise here. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
