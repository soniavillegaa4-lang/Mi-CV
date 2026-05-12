function openDocs(){
    document.getElementById("docs").style.display = "flex";
}

function closeDocs(){
    document.getElementById("docs").style.display = "none";
}

function closeGallery(){
    document.getElementById("gallery").style.display = "none";
}

function closeViewer(){
    document.getElementById("imageViewer").style.display = "none";
}

function showGallery(images){

    let container = document.getElementById("galleryImages");

    container.innerHTML = "";

    images.forEach(img => {

        container.innerHTML += `
            <img 
                src="${img}" 
                class="gallery-img"
                onclick="openViewer('${img}')"
            >
        `;

    });

    document.getElementById("gallery").style.display = "flex";
}

function openViewer(img){

    document.getElementById("imageViewer").style.display = "flex";

    document.getElementById("viewerImg").src = img;
}