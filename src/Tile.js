function Tile ({image, title, content, altImage}) {
    return (
        <section>
            <h2>{title}</h2>
            <p>{content}</p>
            <img src={image} alt={altImage}/>
        </section>
    )
}

export default Tile;