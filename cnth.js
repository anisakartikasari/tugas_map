const myObj = [
    {name : 'shark', likes: 'ocean'},
    {name : 'whale', likes: 'ocean'},
    {name : 'turtle', likes: 'pond'},
    {name : 'otter', likes: 'fish biscuits'},
    {name : 'lion', likes: 'land'},
    {name : 'nemo', likes: 'ocean'}
];

console.log(myObj.map(getFullName).join(" "));

function getFullName(item) {
    return [item.name,item.likes];
}