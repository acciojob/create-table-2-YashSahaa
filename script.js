function createTable() {
    //Write your code here
   const rn = prompt("Input number of rows");
	const cn = prompt("Input number of columns");
	let table = document.getElementById("myTable");
	for (let i = 0; i < rn; i++) {
		let row = document.createElement("tr")
		for (let j = 0; j < cn; j++) {
			row.innerHTML +=`
			<td>Row-${i} Column-${j}</td>
			` 
		}
		table.append(row)
	}
	
}
