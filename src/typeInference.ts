function addition(a = 0, b = 0) {
    return a + b 
}


addition(7, 8)


const fruits = ['mango', 'apple', 'orange' , 202, 34, 85]
fruits[4] = 'Strign'
console.log(fruits);


const user = {
    name: "John",
    age: 23,
    verified: true
}

// user.name = 32 // It will show us a error
user.name = "Ashraful";
user.age = 20;
user.verified = false;


function Person (input: typeof user) {
    console.log(input.name)
    console.log(input.age)
}



function validateForm (formData: {
    email: string;
    age: number;
    isAdmin: boolean;

}): boolean {
    const email: string = formData.email;
    const age: number = formData.age;
    const isAdmin:boolean = formData.isAdmin

    if(email.includes('@') && age > 18) {
        return false;
    } 

    return false
}
function validateForm2 (formData: {
    email: string;
    age: number;
    isAdmin: boolean;

}): boolean {
    const { email, age, isAdmin} = formData;
    return email.includes('@') && age > 18
}

