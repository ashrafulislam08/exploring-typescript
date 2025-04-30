// number type array
const nums: number[] = [23, 32,  43]
console.log(nums)

nums.push(25)
nums.push(17)
nums.push(83)
nums.push(58)

nums.pop()
nums.pop()

nums.shift()
nums.shift()

nums.unshift(41, 52, 11)
console.log(nums)

// string type array 
const names: string[] = ['Ashraful', 'Jabbar', "Rafiq"]

names.push("Salam")
names.push("Kalam")
names.push("Janku")

names.pop()
names.pop()

names.unshift("Siam")
names.unshift("Sam")

names.shift()
console.log(names)


const phones: {name: string, brand:string, model: string, year: number}[] = [
    {
        name: 'BandToag',
        brand: 'Tecno',
        model: 'BanT20',
        year: 2024
    }
]

phones.push({
    name: 'Samsung Galaxy S3',
    brand: 'Samsung',
    model: 'Samsung S2',
    year: 2022
})