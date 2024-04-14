import s from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({onLoadMore}) => {
  return (
    <div className={s.div}>
      <button className={s.btn_loadmore} onClick={onLoadMore} type="button" >Load more</button>
      
    </div>
  )
}

export default LoadMoreBtn
