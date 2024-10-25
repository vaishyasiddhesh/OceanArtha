var c=document.getElementById('graph_heading');
var a=document.getElementById('myrevenue');
a.addEventListener("click",function() {
    c.innerHTML="Revenve"
     alert("clicked");
     
    
     updateGraph('dataset1');
   
 });
var b=document.getElementById('mypl');

b.addEventListener("click",function() {
   
 c.innerHTML="Profit & Loss"
 alert("P&L Clicked");
 updateGraph('dataset2');
 
 });

 var e=document.getElementById('myratio');

 e.addEventListener("click",function() {
    
  c.innerHTML="Ratio"
  alert("Ratio Clicked");
 
  
  });
  var f=document.getElementById('mysummary');

  f.addEventListener("click",function() {
     
   c.innerHTML="Summary"
   alert("Summary Clicked")
   
   });



   const grapData={
    dataset1:{
        label:'Revene',
        data:[210,123,141],
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
         
         
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)'
         
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          
         
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)'
         
        ],
    
    },
    dataset2:{
        label:'P&L',
        data:[100,93,110],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
           
          
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)'
           
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            
           
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)'
           
          ],
    },
    
};
const config={
type:'bar',
data:{
    labels:[2020,2021,2023],
    datasets:[grapData.dataset1],
},
options:{},
};
const myChart=new Chart(document.getElementById('myChart').getContext('2d'),config);
function updateGraph(datasetkey){
myChart.data.datasets=[grapData[datasetkey]];


myChart.update();
}



///table//
var d=document.getElementById('mybalancesheet');

d.addEventListener("click",function() {
   
 c.innerHTML="Balance Sheet"
 alert("Balance Sheet Clicked");
 
 createTable();
 
 });









function createTable() {
  // Create the table element
  var table = document.createElement('table');
  table.style.width = '100%';
  table.setAttribute('border', '4');

  // Create the header row
  var thead = document.createElement('thead');
  var headerRow = document.createElement('tr');

  var headers = ['Asset type', 'FY1', 'FY2','FY3'];
  headers.forEach(headerText => {
      var header = document.createElement('th');
      header.appendChild(document.createTextNode(headerText));
      headerRow.appendChild(header);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create the body of the table
  var tbody = document.createElement('tbody');

      
  var tr = document.createElement('tr');
          var td = document.createElement('td');
          td.appendChild(document.createTextNode('Current asset'));
          tr.appendChild(td);
          var td = document.createElement('td');
          td.appendChild(document.createTextNode('600'));
          tr.appendChild(td);
          var td = document.createElement('td');
          td.appendChild(document.createTextNode('700'));
          tr.appendChild(td);
          var td = document.createElement('td');
          td.appendChild(document.createTextNode('900'));
          tr.appendChild(td);
      tbody.appendChild(tr);


      var tr = document.createElement('tr');
          var td = document.createElement('td');
          td.appendChild(document.createTextNode('Fixed asset'));
          tr.appendChild(td);
          var td = document.createElement('td');
          td.appendChild(document.createTextNode('200'));
          tr.appendChild(td);
          var td = document.createElement('td');
          td.appendChild(document.createTextNode('190'));
          tr.appendChild(td);
          var td = document.createElement('td');
          td.appendChild(document.createTextNode('150'));
          tr.appendChild(td);
      tbody.appendChild(tr);


      var tr = document.createElement('tr');
      var td = document.createElement('td');
      td.appendChild(document.createTextNode('Other asset'));
      tr.appendChild(td);
      var td = document.createElement('td');
      td.appendChild(document.createTextNode('0'));
      tr.appendChild(td);
      var td = document.createElement('td');
      td.appendChild(document.createTextNode('10'));
      tr.appendChild(td);
      var td = document.createElement('td');
      td.appendChild(document.createTextNode('90'));
      tr.appendChild(td);
  tbody.appendChild(tr);
  

  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.appendChild(document.createTextNode('Current Liabilities'));
  tr.appendChild(td);
  var td = document.createElement('td');
  td.appendChild(document.createTextNode('500'));
  tr.appendChild(td);
  var td = document.createElement('td');
  td.appendChild(document.createTextNode('420'));
  tr.appendChild(td);
  var td = document.createElement('td');
  td.appendChild(document.createTextNode('280'));
  tr.appendChild(td);
tbody.appendChild(tr);


var tr = document.createElement('tr');
var td = document.createElement('td');
td.appendChild(document.createTextNode('Long-term Liabilities'));
tr.appendChild(td);
var td = document.createElement('td');
td.appendChild(document.createTextNode('210'));
tr.appendChild(td);
var td = document.createElement('td');
td.appendChild(document.createTextNode('90'));
tr.appendChild(td);
var td = document.createElement('td');
td.appendChild(document.createTextNode('20'));
tr.appendChild(td);
tbody.appendChild(tr);


var tr = document.createElement('tr');
var td = document.createElement('td');
td.appendChild(document.createTextNode('Owner Equity'));
tr.appendChild(td);
var td = document.createElement('td');
td.appendChild(document.createTextNode('20%'));
tr.appendChild(td);
var td = document.createElement('td');
td.appendChild(document.createTextNode('25%'));
tr.appendChild(td);
var td = document.createElement('td');
td.appendChild(document.createTextNode('28%'));
tr.appendChild(td);
tbody.appendChild(tr);



var tr = document.createElement('tr');
var td = document.createElement('td');
td.appendChild(document.createTextNode('Total Assets'));
tr.appendChild(td);
var td = document.createElement('td');
td.appendChild(document.createTextNode('800'));
tr.appendChild(td);
var td = document.createElement('td');
td.appendChild(document.createTextNode('900'));
tr.appendChild(td);
var td = document.createElement('td');
td.appendChild(document.createTextNode('1140'));
tr.appendChild(td);
tbody.appendChild(tr);

var tr = document.createElement('tr');
var td = document.createElement('td');
td.appendChild(document.createTextNode('Total Liabilites'));
tr.appendChild(td);
var td = document.createElement('td');
td.appendChild(document.createTextNode('710'));
tr.appendChild(td);
var td = document.createElement('td');
td.appendChild(document.createTextNode('510'));
tr.appendChild(td);
var td = document.createElement('td');
td.appendChild(document.createTextNode('300'));
tr.appendChild(td);
tbody.appendChild(tr);


var tr = document.createElement('tr');
var td = document.createElement('td');
td.appendChild(document.createTextNode('Balance'));
tr.appendChild(td);
var td = document.createElement('td');
td.appendChild(document.createTextNode('90'));
tr.appendChild(td);
var td = document.createElement('td');
td.appendChild(document.createTextNode('390'));
tr.appendChild(td);
var td = document.createElement('td');
td.appendChild(document.createTextNode('840'));
tr.appendChild(td);
tbody.appendChild(tr);
  

  table.appendChild(tbody);

  // Append the table to the div
  document.getElementById('tableContainer').appendChild(table);



}

