//Imports the css file for this component
import "./GalleryListItem.css"
import { useState } from "react";

//Exports function for use in GallerList and props used. Conditionally renders discription or image based on discription state. Button functionality changes state of setShowDescription. Also has like button functionality.
export default function GalleryListItem({ image, addLike }) {
    const [showDescription, setShowDescription] = useState(null);
    return (
        <div className="image-card">
            {showDescription !== image.id ? (
                <div className="image" ><img src={image.path} onClick={() => setShowDescription(image.id)} />
                </div>) : (<div className="description">
                    <p>{image.description}</p><button className="close-description-button" onClick={() => setShowDescription(null)}>Close Description</button>
                </div>)}

            <div className="likes">
                <p><span>{image.likes}</span> likes! </p><button className="like-button" onClick={() => addLike(image.id)}>Like!</button>
            </div>
        </div>

    )
}