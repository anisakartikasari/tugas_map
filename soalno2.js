const ages = [
    {name : 'shark', likes: 'ocean'},
    {name : 'whale', likes: 'ocean'},
    {name : 'turtle', likes: 'pond'},
    {name : 'otter', likes: 'fish biscuits'},
    {name : 'lion', likes: 'land'},
    {name : 'nemo', likes: 'ocean'}
];

const bebas = ages.filter(age =>{
    return age.likes=="ocean"
})

console.log(bebas);

