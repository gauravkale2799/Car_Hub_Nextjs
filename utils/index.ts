export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '3f158886aamsh87c949e8f320f48p10440fjsna679527085f5',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        
    }
    const response = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {
        headers: headers,
    });
    const result = await response.json();
    return result; 
}