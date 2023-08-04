import {useState} from "react";

const initialUserInput =  {
    'current-saving': 10000,
    'yearly-contribution':1200,
    'expected-return':7,
    'duration': 10,
}
const UserInput = (props) => {
    const [userInput,setUserInput] = useState(initialUserInput);


    const submitHandler = (event) => {
        // To avoid refleshing page after submit (which is explorer default action)
      event.preventDefault();
      console.log("SUBMIT");

      props.onCalculate(userInput);
    }

    const resetHandler = (event) => {
        //..
        console.log("RESET");
        setUserInput(initialUserInput)
    }

    const changeHandler = (input,value) => {
        //..
        console.log(input,value);
        setUserInput( (prevInput) => {
            return{
                //copy of old input data
                ...prevInput,
                [input]: value,
            };
        });
    };

    return(
        <form onSubmit={submitHandler} className="form">
        <div className="input-group">
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input onChange={(event) => changeHandler('current-savings',event.target.value)} value={userInput['current-saving']} type="number" id="current-savings" />
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input type="number" id="yearly-contribution" onChange={(event) => changeHandler('yearly-contribution',event.target.value)} value={userInput['yearly-contribution']}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                </label>
                <input type="number" id="expected-return" onChange={(event) => changeHandler('expected-return',event.target.value)} value={userInput['expected-return']}/>
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input type="number" id="duration" onChange={(event) => changeHandler('duration',event.target.value)} value={userInput['duration']}/>
            </p>
        </div>
        <p className="actions">
            <button onClick={resetHandler} type="reset" className="buttonAlt">
                Reset
            </button>
            <button type="submit" className="button">
                Calculate
            </button>
        </p>
    </form>);

};
export default UserInput;