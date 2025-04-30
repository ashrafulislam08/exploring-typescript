/**
 * Typed Parameters 
 * Typed Return Values
 * Optional Parameters
 * Default Value
 * Rest Parameters
 */


/**
 * This function takes two number and return sum
 * @param a take a number 
 * @param b take a number 
 * @returns a summation of both number and return 
 */
function add(a: number, b: number):number {
    return parseFloat((a  + b).toFixed(2))
}
add(7, 23)


function greet(name: string, message: string = "Welcome to Stack Learner", ...rest: string[]) {
    console.log(`Hello, ${name}! ${message}!`)
    console.log(rest)
}