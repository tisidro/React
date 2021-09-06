const Home = () => {

    const handleClick = () => {
        console.log('Hi there!');
    }
    const handleClickTwo = (name) => {
        console.log('Hi' + name);

    }
    return (

        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}> Click Me</button>
            <button onClick={() => {
                handleClickTwo('Terri')
            }}> Click Again</button>
        </div>
    );
}

export default Home;