import './App.css';
import Counter from './Counter';
import F1ChildA from './Fol1/F1ChildA';
import AddPostForm from './features/post/AddPostForm';
import PostList from './features/post/PostList';

function App() {
  return (
    <div className="App">
      <h1>
        <Counter />
        <F1ChildA />

        {/* <AddPostForm />
        <PostList /> */}
      </h1>
    </div>
  );
}

export default App;
