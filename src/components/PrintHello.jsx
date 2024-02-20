import  React from "react";

export const PrintHello = ()=>{
    const customer = {
        first_name: "Peter",
        last_name: "Shitote",
    };

    return(
    <>
        <h1>Hello React</h1>
        <h2>This is an introduction to React Basics. I hope you enjoy!</h2>

        <h3>My name is {customer.first_name} {customer.last_name}</h3>

    </>);
}