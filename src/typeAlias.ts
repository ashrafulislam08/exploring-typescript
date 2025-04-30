type Name = string;
type ID = string | number;


function printId(id: ID) {
    console.log('Your id is: ',(id))
}



type User = {
    id: ID,
    firstName: string,
    lastName?: string;
    skills: string[]
}

function createUser(firstName: string, lastName?: string) {
    const user = {
        id: crypto.randomUUID(),
        firstName,
        lastName,
        skills: ['HTML', 'CSS', 'JavaScript']
    } as User;
    return user;    
    
}

