window.onload = function() {
    document.getElementById('formData').addEventListener('submit', function(){
    var fsname = document.getElementById('fsname').value;
    var lsname = document.getElementById('lsname').value;
    var add = document.getElementById('add').value;
    var temp_gender = document.getElementsByName('genders');
    for (var i = 0; i< temp_gender.length ; i++) {  
        if (temp_gender[i].checked) {
            localStorage.setItem('gender', temp_gender[i].value);
        }
    }
    var temp_food = document.getElementsByName('foods');
    let markedCheckbox = [];
    temp_food.forEach((val) => {
    if (val.checked){
        markedCheckbox.push(val.value);
    }
    });
    if(markedCheckbox.length < 2){
        alert('Please select atleast two food Choices');
    }else{
        let foodStr = JSON.stringify(markedCheckbox);
        localStorage.setItem('food', foodStr);
    }
    
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
    localStorage.setItem('fsname', fsname);
    localStorage.setItem('lsname', lsname);
    localStorage.setItem('add', add);
    localStorage.setItem('state', state);
    localStorage.setItem('country', country);
    });
    function data() {
        const first = localStorage.getItem('fsname');
        const last = localStorage.getItem('lsname');
        const address = localStorage.getItem('add');
        const gender = localStorage.getItem('gender');
        const food = JSON.parse(localStorage.getItem('food'));
        const state = localStorage.getItem('state');
        const country = localStorage.getItem('country');
        document.getElementById('tab');
        let table = document.createElement('table');
        table.innerHTML = `
        <tr>
        <th>First Name</th>
        <td>${first}</td>
        </tr>
        <tr>
        <th>Last Name</th>
        <td>${last}</td>
        </tr>
        <tr>
        <th>Address</th>
        <td>${address}</td>
        </tr>
        <tr><th>Gender</th>
        <td>${gender}</td>
        </tr>
        <tr><th>Food</th>
        <td>${food}</td>
        </tr>
        <tr><th>State</th>
        <td>${state}</td>
        </tr><tr><th>Country</th>
        <td>${country}</td>
        </tr>`
        document.body.append(table);
        }
        data();
    }