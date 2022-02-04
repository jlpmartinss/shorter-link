//ir buscar os links guardados
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key);

    let linksSaved = JSON.parse(myLinks) || [];

    return linksSaved;
}

//guardar o link na localStorage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //nao duplicar
    const hasLink = linksStored.some(link => link.id === newLink.id);

    if(hasLink){
        console.log('esse link já está na sua lista!')
        return;
    }

    //adiciona o link na lista
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log('link guardado com sucesso');

}

export function deleteLink(Links, id){ 
    
    let myLinks = Links.filter(item => {
        //devolve todos os links MENOS o que clicou, ou seja, não devolve aquele que tem o id igual
        return (item.id !== id)
    })

    localStorage.setItem('@linkcurto', JSON.stringify(myLinks));
    //devolve array atualizado
    return myLinks;
}
