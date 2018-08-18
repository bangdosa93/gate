$(document).ready(function () {
  dbRequest('initial');

});

let dbRequest = function (status) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'utils/gate.db', true);
  xhr.responseType = 'arraybuffer';


  xhr.onload = function (e) {
    var uInt8Array = new Uint8Array(this.response);
    var db = new SQL.Database(uInt8Array);
    
    if (status === "hold"){
      db.exec("UPDATE controller SET status = 0 WHERE category = 'lock_status'"); 
    }
    let contents = db.exec("SELECT category, status FROM controller WHERE category = 'lock_status'");  
    window.lock_status = contents[0].values[0][1]
      
    }
    

    

    // contents[0].values.forEach((val) => {
    //   // console.log('in the loop')
    //   val.forEach((el) => {
    //     // console.log('2nd loop')
    //     // console.log(el)
    //   })
    // })

    // console.log(JSON.parse(contents));
    // console.log(contents[0].values[1]);
    // contents.forEach((el) => {
    //   console.log(el)
    // })

  xhr.send();
}

let updateDBStatus = function (status) {
  dbRequest(status);
}