var envisionWindow = document.getElementById('GROUP_Grp_WSS_COURSE_SECTIONS')
var summaryTable = envisionWindow.getElementsByTagName("table")[0]
var rows = summaryTable.getElementsByTagName('tr')

var i = getStartingIndex(rows)
addToHeaders(i, summaryTable)
addToRows(i+1, rows)

function getStartingIndex(rows){
    //headers in the first row
    if(rows[0].getElementsByTagName('th').length > 1) {
        //headers at 1st row
        return 0
    }
    else {
        //headers at 2nd row
        return 1
    }
}

function addToHeaders(headerIndex, summaryTable) {
    var headers = summaryTable.getElementsByTagName('tr')[i]
    if (headers != null) {
        var col = document.createElement('th')
        var text = document.createTextNode('Notify me when available')
        col.appendChild(text)
        headers.appendChild(col)
    }
}

function addToRows(startIndex, rows) {
    //Move to first row of info after headers
    for(startIndex; startIndex < rows.length; startIndex++) {
        var col = document.createElement('td')
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'

        // //If course is empty
        if(rows[startIndex].innerHTML.includes("Closed")) {
            col.appendChild(checkbox)
        }
        else {
            if (i % 2 == 1) {
                col.style.backgroundColor = 'rgb(247, 247, 247)'
            }
        }

        rows[startIndex].appendChild(col)

    }
}


var submit = document.getElementsByClassName('shortButton');