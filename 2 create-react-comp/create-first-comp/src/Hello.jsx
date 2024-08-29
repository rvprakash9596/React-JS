function Hello(){
    // let name="Ravi Prakash";
    // return <h1>Hello {name}, Kaise ho </h1>

    let fullName = ()=>{
        return 'Ravi Prakash Singh';
    }
    return <h3>
        Hello {fullName()} . This is fat arrow function.</h3>
}
export default Hello;