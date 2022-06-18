import React from 'react'

const Form = () => {
    return (
        <div >
            <form>
  <ul class="wrapper">
    <li class="form-row">
      <label for="name">Name</label>
      <input type="text" id="name"/>
    </li>
    <li class="form-row">
      <label for="username">User name</label>
      <input type="text" id="username"/>
    </li>
    <li class="form-row">
      <label for="email">Email Address</label>
      <input type="email" id="email"/>
    </li>

    <li className='form-row'>
<label for="phone">Phone Number</label>
<input type="phone" id="phone" />

    </li>
<li className='form-row'>
<label for="city">City</label>
<input type="text" id="city" />

</li>

<li className='form-row'>
<label for="state">State</label>
<input type="text" id="state" />

</li>

<li className='form-row'>
<label for="country">Country</label>
<input type="text" id="country" />

</li>
    
    
    <li class="form-row">
      <button type="submit">Submit</button>
    </li>
  </ul>
</form>
        </div>
    )
}

export default Form