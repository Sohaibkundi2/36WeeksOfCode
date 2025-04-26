async function getData() {
    const url = 'https://colormagic.app/api/palette/search?q='
    const color = 'red'
    try {
        const response = await (await fetch(`${url}${color}`))
    
        if(!response.ok){
        throw new Error(`Response status: ${response.status}`);
    }
        const data = await response.json()
    const colorName = data[0].colors
    console.log(colorName)
        
    } catch (error) {
        console.error('Error fetching data:', error);
        
    }
    

}
// getData()