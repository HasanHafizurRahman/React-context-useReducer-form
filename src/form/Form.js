import React, { useReducer } from 'react';

const Form = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        education: "",
        quantity: 0,
        feedback: "",
        term: false
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "INPUT":  
                return{
                    ...state,
                    [action.payload.name] : action.payload.value,
                }
            case "TOGGLE":  
                return{
                    ...state,
                    term: !state.term
                }
            case "INCREASE":
                return{
                    ...state,
                    quantity : state.quantity + 1
                }
            case "DECREASE":
                return{
                    ...state,
                    quantity : state.quantity - 1
                }
        
            default:
               return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const submit = (e) => {
        e.preventDefault();
        console.log(state);
    }
    return (
        <div className='h-screen w-screen flex justify-center items-center overflow-auto'>
        <form
          className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between'
          onSubmit={submit}
        >
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='firstName'>
              First Name
            </label>
            <input
              className='bg-slate-100 rounded'
              type='text'
              name='firstName'
              id='firstName'
              required
              onBlur={
                e => dispatch({
                    type: "INPUT",
                    payload: {name: e.target.name, value: e.target.value}
                })
              }
            />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='lastName'>
              Last Name
            </label>
            <input
              className='bg-slate-100 rounded'
              type='text'
              name='lastName'
              id='lastName'
              required
              onBlur={
                e => dispatch({
                    type: "INPUT",
                    payload: {name: e.target.name, value: e.target.value}
                })
              }
            />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='email'>
              Email
            </label>
            <input
              className='bg-slate-100 rounded'
              type='email'
              name='email'
              id='email'
              required
              onBlur={
                e => dispatch({
                    type: "INPUT",
                    payload: {name: e.target.name, value: e.target.value}
                })
              }
            />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <h1 className='mb-3'>Gender</h1>
            <div className='flex gap-3'>
              <div>
                <input
                  className='bg-slate-100 rounded'
                  type='radio'
                  id='male'
                  name='gender'
                  value='male'
                  onBlur={
                    e => dispatch({
                        type: "INPUT",
                        payload: {name: e.target.name, value: e.target.value}
                    })
                  }
                />
                <label className='ml-2 text-lg' for='male'>
                  Male
                </label>
              </div>
              <div>
                <input
                  className='bg-slate-100 rounded'
                  type='radio'
                  id='female'
                  name='gender'
                  value='female'
                  onBlur={
                    e => dispatch({
                        type: "INPUT",
                        payload: {name: e.target.name, value: e.target.value}
                    })
                  }
                />
                <label className='ml-2 text-lg' for='female'>
                  Female
                </label>
              </div>
              <div>
                <input
                  className='bg-slate-100 rounded'
                  type='radio'
                  id='other'
                  name='gender'
                  value='other'
                  onBlur={
                    e => dispatch({
                        type: "INPUT",
                        payload: {name: e.target.name, value: e.target.value}
                    })
                  }
                />
                <label className='ml-2 text-lg' for='other'>
                  Other
                </label>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-3' for='education'>
              Education
            </label>
            <select
              className='bg-slate-100 rounded'
              name='education'
              id='education'
              onChange={
                e => dispatch({
                    type: "INPUT",
                    payload: {name: e.target.name, value: e.target.value}
                })
              }
              required
            >
              <option value='SSC'>SSC</option>
              <option value='HSC'>HSC</option>
              <option value='underGrad'>Under Graduate</option>
              <option value='graduate'>Graduate</option>
            </select>
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-3'>Number of PCs</label>
            <div className='flex justify-between items-center gap-2 '>
              <button className='bg-indigo-500 text-lg text-white rounded h-10 w-10' onClick={() => dispatch({
                type: 'DECREASE'
              })}>
                -
              </button>
              <div className='border flex-1 flex justify-center items-center h-10 rounded-md border-gray-300'>
                <span className='text-lg'>{state.quantity}</span>
              </div>
              <button className='bg-indigo-500 text-lg text-white rounded h-10 w-10' onClick={() => dispatch({
                type: "INCREASE"
              })}>
                +
              </button>
            </div>
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-3' for='feedback'>
              Feedback
            </label>
            <textarea
              className='bg-slate-100 rounded'
              name='feedback'
              id='feedback'
              cols='30'
              rows='4'
              
            ></textarea>
          </div>
  
          <div className='flex justify-between items-center w-full'>
            <div className='flex  w-full max-w-xs'>
              <input
                className='mr-3'
                type='checkbox'
                name='term'
                id='terms'
                onClick={() => dispatch({
                    type: "TOGGLE"
                })}
              />
              <label for='terms'>I agree to terms and conditions</label>
            </div>
            <button
              className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
              type='submit'
              disabled={!state.term}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default Form;