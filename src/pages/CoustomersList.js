import React from 'react'

export default function CoustomersList(props) {
  return (
    <>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Project Name</th>
      <th scope="col">Status</th>
      <th scope="col">Weeks</th>
      <th scope="col">Budget</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{props.Name}</td>
      <td>{props.Project_Name}</td>
      <td>{props.Status}</td>
      <td>{props.Weeks}</td>
      <td> <div>{props.Budget}</div></td>
    </tr>
    {/*   class={Styles.Status} */}
  </tbody>
</table>
    </>
  )
}
