// json2html.js
export default function json2html(data) {
    const headers = ['Name', 'Age', 'Gender']; // Define the headers for the table
    let table = '<table data-user="neerajnithin55@gmail.com">';
    table += '<thead><tr>';
    
    // Generate table header
    headers.forEach(header => {
      table += `<th>${header}</th>`;
    });
    table += '</tr></thead><tbody>';
    
    // Generate table rows
    data.forEach(row => {
      table += '<tr>';
      headers.forEach(header => {
        table += `<td>${row[header] || ''}</td>`; // Fill missing values with empty strings
      });
      table += '</tr>';
    });
    
    table += '</tbody></table>';
    
    return table; // Return the HTML table as a string
  }
  