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



enum EmployeeRole {
    DEVELOPER = 'DEVELOPER',
    MANAGER = 'MANAGER',
    HR = 'HR'
}


const employees: {
    id: number;
    name: string;
    role: EmployeeRole;
}[] = []


employees.push({id: 1, name: "Siam", role: EmployeeRole.DEVELOPER})
employees.push({id: 2, name: "Ashraful", role: EmployeeRole.MANAGER})
employees.push({id: 3, name: "Sam", role: EmployeeRole.HR})
employees.push({id: 4, name: "Sankit", role: EmployeeRole.DEVELOPER})


console.log(employees)