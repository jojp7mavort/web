const obtenerMemes = async () => {
    
    const memesContainers = document.getElementById('list-memes');
    const memeTemplate = document.getElementById('meme');

    const request = await fetch("https://api.imgflip.com/get_memes"); 

    const respuesta = await request.json();

    respuesta.data.memes.slice(0, 10).forEach(meme => { 
        const newMemeTemplate = memeTemplate.cloneNode(true);
        const imagen = newMemeTemplate.querySelector('img');
        imagen.src = meme.url;
        memesContainers.appendChild(newMemeTemplate);
    });
    memeTemplate.remove();
};

obtenerMemes();


