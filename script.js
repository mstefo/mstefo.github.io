const OpenProject = (id) => {
    window.location = "Projects/Project_"+id+".html";
}

var imageBackground

const expandImage = (imageUrl, caption) => {
    imageBackground = document.createElement("div")
    imageBackground.id = "expandedImageBackground"
    document.body.appendChild(imageBackground)
    imageUrl = "../Images/"+imageUrl

    // var closeButton = document.createElement("div")
    // closeButton.appendChild(document.createTextNode("Close"))
    // closeButton.classList.add("closeImageButton")

    // imageBackground.appendChild(closeButton)
    if(imageUrl === undefined || imageUrl === "" || imageUrl === null) {
        var undefinedText = document.createElement("div")
        undefinedText.appendChild(document.createTextNode("Error: an image was not supplied!"))
        imageBackground.appendChild(undefinedText)
        imageBackground.onclick = (event) => {
            closeExpansion()
        } 

    // } else if(imageUrl.slice(imageUrl.length - 4, imageUrl.length) === "pdf") {
    } else {
        var imageContainer = document.createElement("div")
        imageContainer.classList.add("expandedImageContainer")
        var image;
        if(imageUrl.includes(".pdf")) {
            image = document.createElement("iframe")
            image.src = imageUrl
            image.height = "1000px";
        } else {
            image = document.createElement("img")
            image.src = imageUrl
            image.alt = caption
        }
        
        image.classList.add("expandedImage")
        imageContainer.appendChild(image)
        
        var imageCaption = document.createElement("p")
        imageCaption.classList.add("expandedImageCaption")
        imageCaption.appendChild(document.createTextNode(caption))

        imageContainer.appendChild(imageCaption)

        imageBackground.appendChild(imageContainer)
        imageBackground.onclick = (event) => {
            if (event.target !== image) {
                closeExpansion()
            }
        } 

    }
    
    
}

const closeExpansion = () => {
    imageBackground.remove()
}