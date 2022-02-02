const name = "anisa"
const map = Array.prototype.map

const newMap = map.call(name, eachLetter => {
    return `${eachLetter}aa`
})

console.log (newMap [3])