import s from './ImageCard.module.css'

const ImageCard = ({img, openModal}) => {
  return (
    <li onClick={() => { openModal(img.urls.regular) }} className={s.list}>
      <div className={s.wrap}>
        <img src={img.urls.small} alt={img.description}  className={s.img}/>
      </div>
      
    </li>

  )
}

export default ImageCard
