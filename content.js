var envisionWindow = document.getElementById('GROUP_Grp_WSS_COURSE_SECTIONS')
if (envisionWindow != null) {
    myWindow.document.write(envisionWindow.innerHTML)
}

var summaryTable = envisionWindow.getElementsByTagName("table")[0]

var headers = summaryTable.getElementsByTagName('tr')[1]
if (headers != null) {
    var col = document.createElement('th')
    var text = document.createTextNode('Notify me when available')
    col.appendChild(text)
    headers.appendChild(col)

    myWindow.document.write(headers.innerHTML)
}

var rows = summaryTable.getElementsByTagName('tr')

var i;
for(i = 2; i < rows.length; i++) {
    var col = document.createElement('td')
    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    col.appendChild(checkbox)

    if(i % 2 == 1) {
        col.style.backgroundColor = 'rgb(247, 247, 247)'
    }

    rows[i].appendChild(col)

}
