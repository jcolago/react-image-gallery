
//Exports function for use in GallerList and props used. Conditionally renders discription based on discription state
export default function GalleryListItem({ image, addLike }) {
    return(
        <div className="image-card">
            <div className="image"><img src={image.path} alt="" /></div>
            <div className="likes"> 
            <button className="like-button" onClick={() => addLike(image.id)}>Like!</button>
            <p><span>{image.likes}</span> likes! </p>
            </div>
        </div>
        
    )
}