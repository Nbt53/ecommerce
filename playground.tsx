import { type } from "os"

interface PersonLoggerFn {
    logPersonInfo(): string
}

export default function Play() {
    const name = 'Nick'
    const age = 35

    function logPersonInfo(name: string, age: number) {
        const info = `Name: ${name}  Age: ${age}`

        return (
            <h2>{info}</h2>)
    }

    const person = {
        name: 'jim',
        age: 68
    }

    type Person = {
        name: string,
        age: number
    }

    function logPersonInfoTwo(person: Person) {
        const info = `Name: ${person.name}  Age: ${person.age}`
        return (
            <h2>{info}</h2>)
    }

    return (
        <>
            <h1>Hello World</h1>
            {logPersonInfo(name, age)}
            {logPersonInfoTwo(person)}
        </>
    )
}