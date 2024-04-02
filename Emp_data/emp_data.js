let Employees=[{id:1,name:"Firoz",sal:45000},
              {id:2,name:"Krishna",sal:55000},
              {id:3,name:"Siva",sal:55000}]

function empData(){
    let rows=""
    for(emp of Employees){
        rows=rows+`<tr>
                     <td>${emp.id}</td>
                     <td>${emp.name}</td>
                     <td>${emp.sal}</td>
                   </tr>`
    }

    document.getElementById('abc').innerHTML=rows
}