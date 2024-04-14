import s from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'


const ImageGallery = ({images, openModal}) => {
  return (
    <ul className={s.wrapper}>
		{images.map(img => {
		return <ImageCard openModal={openModal} key={img.id} img={img} />
	})}
</ul>

  )
}

export default ImageGallery
