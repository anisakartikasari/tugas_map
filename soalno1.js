const myUsers = [
    {name : 'kelinci', totalSpecies: 325},
    {name : 'kucing', totalSpecies: 641},
    {name : 'jerapah', totalSpecies: 265},
]

const usersByTotalSpecies = myUsers.map(item => {
    const container = {};

    container[item.name] = item.totalSpecies;
    container.total = item.name.length * 10;

    return container;
})

console.log(usersByTotalSpecies);