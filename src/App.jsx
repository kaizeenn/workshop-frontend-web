import Mahasiswa from "./components/Mahasiswa";
import PostList from "./components/PostList";
import ProductList from "./components/ProductList";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      <h1>React Frontend - Pertemuan 9</h1>
      <Greeting name="Mahasiswa" />
      <ProductList />
      <Mahasiswa nama="Khairil" npm="5124522004" prodi="Teknik Informatika" />
      <PostList />
    </div>
  );
}

export default App;
