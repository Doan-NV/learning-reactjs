import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count])

    const [bio, setBio] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const data = await response.json();
            console.log(data);
            setBio(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const position = document.documentElement.scrollTop;
            console.log("scrolling position: ", position);
        })
    })




    const [input, setInput] = useState('');
    const [isValid, setIsValid] = useState(false);

    const inputHandler = e => {
        setInput(e.target.value);
    };

    useEffect(() => {
        if (input.length < 5 || /\d/.test(input)) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [input]);
    return (
        <div>
            <p>You clicked {count} times</p>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <div>
                {visible && <p>This is hidden content</p>}
                <button onClick={() => setVisible(!visible)}>Change visible</button>
            </div>

            <hr />
            <h2>useEffect use case</h2>
            <h3>Running once on mount: fetch API data</h3>
            <p>bio:</p>
            {/* <pre>{JSON.stringify(bio, null, '\t')}</pre> */}


            <hr />
            <h2>useEffect use case</h2>
            <h3>Running on state change: validating input field</h3>
            <form>
                <label htmlFor="input">Write something (more than 5 non numerical characters is a valid input)</label><br />
                <input type="text" id="input" autoComplete="off" onChange={inputHandler} style={{ height: '1.5rem', width: '20rem', marginTop: '1rem' }} />
            </form>
            <p><span style={isValid ? { backgroundColor: 'lightgreen', padding: '.1px' } : { backgroundColor: 'lightpink', padding: '.1px' }}>{isValid ? 'Valid input' : 'Input not valid'}</span></p>
        </div>
    );
}

export default UseEffect