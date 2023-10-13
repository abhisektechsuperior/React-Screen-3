import React from 'react'

const Form1 = () => {
    return (
        <>
            <div className='FormContainer container-fluid bg-white my-1 position-absolute'>
                <form className='form'>
                    <p className='formpara'>For current rent  estimate,please provide the following:</p>
                    <div className='container caption'>
                        <div className='row'>
                            <div className='col'>
                                <div className='row justify-content-evenly d-flex'>
                                    <div className='col'>
                                        <p><b>Address</b></p>
                                    </div>
                                    <div className='col '>
                                        <div className='circle bg-dark  '></div>
                                    </div>
                                </div>
                                <input type='text' className='input-1' />
                            </div>
                            <div className='col'>
                                <p><b>Unit</b></p>
                                <input className='input-2' type='text' />
                            </div>
                        </div>
                        <div className='row  my-2'>
                            <div className='col'>
                                <p><b>Property Type</b></p>
                                <input className='input-2' type='text' />
                            </div>
                            <div className='col'>
                                <p><b>SQFT</b></p>
                                <input className='input-2' type='text' />
                            </div>
                            <div className='col'>
                                <p><b>Beds</b></p>
                                <input className='input-2' type='text' />
                            </div>
                            <div className='col' >
                                <p><b>Bath</b></p>
                                <input className='input-2' type='text' />
                            </div>
                            <div className='col my-4'>
                                <button type="button" class="btn btn-danger">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form1