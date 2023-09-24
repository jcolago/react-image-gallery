import "./GalleryListItem.css"

//Exports function for use in GallerList and props used. Conditionally renders discription based on discription state
export default function GalleryListItem({ image, addLike, setShowDescription, showDescription }) {
    return (
        <div className="image-card">
            <div className="image" ><img  src={image.path} onClick={() => setShowDescription(image.id)} />
            </div>
            
                {showDescription === image.id && (
                    <div className="description">
                    <p>{image.description}</p><button className="close-description-button" onClick={() => setShowDescription(null)}>Close Description</button>
                    </div>)}
            
            <div className="likes">
                <p><span>{image.likes}</span> likes! </p><button className="like-button" onClick={() => addLike(image.id)}>Like!</button>
            </div>
        </div>

    )
}