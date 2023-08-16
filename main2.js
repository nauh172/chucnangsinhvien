
var studentsApi = 'http://localhost:3000/courses'
function start (){
    laydanhsachSinhvien(function(students){
        renderStudent(students)
    })
    xuliThongtinguidi()  
}
start()

function laydanhsachSinhvien (callback){
    fetch (studentsApi)
        .then(function(response){
            return response.json()
        })
        .then(callback)
}


function renderStudent (students){
    var danhsachSinhvien = document.querySelector('.list-student')
    var htmls = students.map(function(studen, index){
        return `
        <tr class="h1">
            <td class="c1">${studen.name}</td>
            <td class="c2">${studen.content}</td>
            <td class="c3"><button onclick="xoaSinhvien(${studen.id})">Xóa</button></td>
            <td class="c4"><button onclick="suaThongtin(${studen.id},'${studen.name}','${studen.content}')">Sửa</button></td>
            <input type="hidden" class="huan">
            <input type="hidden" class="huan2">

        </tr>`
    })
    danhsachSinhvien.innerHTML = htmls.join('')
}

function themSinhvien (data, callback){
    var opition = {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(studentsApi, opition)
        .then(function(response){
            response.json()
        })
        .then(callback)
}
function suaThongtin(id, hoten, truonghoc){
    document.querySelector('.hoten1').value = hoten
    document.querySelector('.truonghoc1').value = truonghoc
    document.querySelector('.huan').value =id
    var bangnhapthong = document.querySelector('.nhapthongtinsua')
    bangnhapthong.classList.add('opennhapthongtinsua')
    
   
}
function xong1 (){
    var id = document.querySelector('.huan').value
    var namenew = document.querySelector('.hoten1').value
    var contentnew = document.querySelector('.truonghoc1').value
    var data = {
        name: namenew,
        content: contentnew
    }
    suaSinhvien(id,data,function(){laydanhsachSinhvien(renderStudent)})
}


function xuliThongtinguidi (){
    var nutthem = document.querySelector('.xong')
    nutthem.onclick = function(){
        var name = document.querySelector('.hoten').value
        var content = document.querySelector('.truonghoc').value
        var data = {
            name: name,
            content: content
        }
        themSinhvien(data,function(){laydanhsachSinhvien(renderStudent)})
        clearform() 
    }
}
function clearform (){
    var name = document.querySelector('.hoten').value=''
    var content = document.querySelector('.truonghoc').value=''
}

function xoaSinhvien (id){
    var  opition = {
        method: 'DELETE',
        headers: {
            'Content-type':'applycation/json'
        },
    }
    fetch(studentsApi+'/'+id, opition)
        .then(function(response){
            response.json()
        })
        .then(function(){
            laydanhsachSinhvien(renderStudent)
        })
}
function suaSinhvien (id, data, callback){
    var  opition = {
        method: 'PUT',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(studentsApi+'/'+id, opition)
        .then(function(response){
            response.json()
        })
        .then(callback)
}



// Tắt mở bảng thêm sinh viên    
var nutthemsinhvien = document.querySelector('.nutthemsinhvien')
var bangthemthongtin = document.querySelector('.nhapthongtin')
function hienbangthemthongtin (){
    nutthemsinhvien.onclick = function (){
        bangthemthongtin.classList.add('opennhapthongtin')
    }
}
hienbangthemthongtin()
var nuttatthemsinhvien = document.querySelector('.nuttatthemsinhvien')
function tatbangthemthongtin (){
    nuttatthemsinhvien.onclick = function(){
        bangthemthongtin.classList.remove('opennhapthongtin')
    }
}
tatbangthemthongtin()


//test
// var mangg = [1,2,3,5,6]
// mangg.map(function(phantu, stt){
//     console.log(phantu)
//     console.log(stt)
// })

