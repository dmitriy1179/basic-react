import Header from './components/header/Header';
import { Banner, BlogContent, News } from './components/blog/blog';
import Blog from './components/blog/blog';
import './App.css';

function App() {

  return (
    <>
    <Header />
    <Blog>
      <Banner />
      <BlogContent />
      <News />
    </Blog>
    </>
  )
}

export default App
