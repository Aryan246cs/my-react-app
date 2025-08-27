import profilePic from './assets/samar.png'

function Card(){

    return(
        <div className="card">
            <img className="cardImage" src={profilePic} alt="profile picture" ></img>
            <h2 className="cardTitle">Samardeep Singh</h2>
            <p className ="cardText">Yo! man wassup?? i'm a guy doing Btech Cse and is completely lost in life. Hope for the best.</p>

        </div>
    );
}

export default Card