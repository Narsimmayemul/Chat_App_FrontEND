// export function extractTime(dataString) {
//     const date = new Date(dataString);
//     const hours = padZero(date.getHours());
//     const minutes = padZero(date.getMinutes());
//     return `${hours}:${minutes}`
// }

// function padZero(number){
//     return number.toString().padStart(2 , "0")
// }


export function extractTime(dataString) {
    const date = new Date(dataString);
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    hours = padZero(hours);
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes} ${ampm}`;
}

function padZero(number){
    return number.toString().padStart(2 , "0")
}
