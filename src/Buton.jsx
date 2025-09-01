function Buton(){
    let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!!`);
    //     }
    // };

    // const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

    // event parameter
    const handleClick = (e) => e.target.textContent = "OUCH! 🤕";



    // we need to use arrow function in onclick if there are parameters to pass.
    return( <button onClick={(e) => handleClick(e)}>Click me 😁</button>)

}
export default Buton