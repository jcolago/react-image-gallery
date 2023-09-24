//Imports the GalleryListItem for use and prop passing
import GalleryListItem from "../GalleryListItem/GalleryListItem"
//Function to display the GallerList and pass props
export default function GalleryList({ galleryList, addLike }) {
    return(
        <div className="gallery-list-container">
            <div className="gallery-header">
                <h2>Image Gallery</h2>
            </div>
            <div className="gallery-list">
                {galleryList.map((image) =>(
                    <GalleryListItem key={image.id} image={image}  addLike={addLike}/>
                ))}
            </div>
        </div>
    )
}