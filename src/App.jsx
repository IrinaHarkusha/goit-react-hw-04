import ImageGallery from "./components/ImageGallery/ImageGallery"
import ImageModal from "./components/ImageModal/ImageModal"
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn"
import Loader from "./components/Loader/Loader"
import SearchBar from "./components/SearchBar/SearchBar"
import { useState, useEffect } from "react"
import './App.css'
import { fetchImg} from "./services/api"
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"
import toast, {Toaster} from "react-hot-toast"


const App = () => {
  const [items, setItems] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [imgURL, setImgURL] = useState({});

  useEffect(() => {
    const getData = async () => {
      setError(false);
      try {
        const data = await fetchImg(searchQuery, page)
        setItems([...items, ...data.results])
        setTotalItems(data.total)
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false)
      }
    }
    getData()
  },[searchQuery, page])

  function onSearchQuery(querry) {
    setSearchQuery(querry)
    setItems([])
    setLoading(true)
  }

  function onLoadMore() {
    setLoading(true)
    setPage(page+1)
  }
  const notify = () => {
    toast('Field is empty...')
    setLoading(false)
  }

  function openModal(imgURL) {
    setIsOpen(true)
    setImgURL(imgURL)
  }

  function closeModal() {
    setIsOpen(false)
  }
  
  return (
    <div>
      <SearchBar setPage={setPage} notify={notify} onSearchQuery={onSearchQuery} />
      {error && <ErrorMessage />}
      
      {totalItems !== 0 && !error && <ImageGallery openModal={openModal} images={items} />}
      {loading && <Loader />}

      {totalItems !== 0 && items.length < totalItems && !error && <LoadMoreBtn onLoadMore={onLoadMore} />}
      <Toaster position="top-right"/>
      
      <ImageModal modalIsOpen={modalIsOpen} imgURL={imgURL} closeModal={closeModal}/>
    </div>
  )
}

export default App
