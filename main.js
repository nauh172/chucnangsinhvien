// Bài 1: Khai báo biến
    // var fullName = 'Nguyen Xuan Huan';
    // var Tuoi = '26'
    // alert(fullName);
    // alert(Tuoi);

// Bài 2: Một số hàm built-in
    // 1.alert (như trên)
    // 2.console
        // var fullName = 'Nguyen Xuan Huan'
        // console.log(fullName)
    // 3.confirm (Xác nhận)
        // confirm('Xác nhận đủ tuổi')
    // 4.prompt
        // prompt('Xác nhận đủ tuổi')
    // 5.set timeout (chạy 1 đoạn code sau 1 khoảng thời gian)
        /*var a=-1;
        var b=-1;
        var c=3;
        var hienketquadieukien1 = 'Điều Kiện Đúng'
        var hienketquadieukien2 = 'Điều Kiện Sai'
        if(a>0 || b>0){
            console.log(hienketquadieukien1)
        }else{
            console.log(hienketquadieukien2)
        }
/*  Bài 3: Các kiểu dữ liệu trong Javascript
        1.Kiểu dữ liệu nguyên thuỷ
            -Number
            -String
            -Boolean
            -Undefined
            -Null
            -Symbol
        2.Kiểu dữ liệu phức tạp
            -Function
            -Object
*/
        //Function

        /*var myFunction = function(){
            console.log('Xin chao cac ban');
            alert('Heloo')
        }
        myFunction();

        //Object

        var myObject={
            name: 'Xuan Huan',
            age: 18,
            adress: 'Ha Noi',

        }
        console.log(typeof myObject)
        
    BÀI 4: CHUỖI
    /* CHUỖI TRONG JAVASCRIPT
    Cách 1: 
*/ 
    //    var firsName = 'Huan';
    //    var lastNane = 'Nguyen';
    //    console.log(`Toi la: ${firsName} ${lastNane}`);
    // LÀM VIỆC VỚI CHUỖI
    // 1.Length (in ra số ký tự của chuỗi)
    // var fullName = 'Huan Hoa Hong'
    // console.log(fullName.length)

    // 2.Find index (tìm ra ký tự thứ bao nhiêu trong chuỗi)
    // var ngaySinh = 'huanhaohoa';
    // console.log(ngaySinh.indexOf('h',5)) //nếu không có phần tử trong chuỗi kết quả trả về  = -1

// Mảng
// 1.tostring (Chuyển mảng thành chuỗi)
// var hoTen = [
//     'Nguyen', 'Xuan','Huan','Dep','Trai'
// ]
// var hoTen2 = [
//     'Vuong','Viet','Tien'
// ]
// console.log(hoTen)
// console.log(hoTen.toString())
// 2.join (Chuyển mảng thành chuỗi nhưng thêm được kí tự giữa các phần tử)
// console.log(hoTen.join('-'))
// 3.pop (Xoá phần tử cuối mảng và hiển thị phần tử đó)
// console.log(hoTen.pop())
// console.log(hoTen)
// 4.push (thêm phần tử vào cuối mảng hiện số phần tử có trong mảng )
// console.log(hoTen.push('Qua'))
// console.log(hoTen)
// 5.shift (Xoá một phần tử đầu mảng và hiển thị phần tử đó)
// 
// 6.unshift (Thêm phần tử vào đàu mảng và hiện số phần tử còn lại trong mảng)
// console.log(hoTen.unshift('Day la'))
// console.log(hoTen)
// 7. splice (Thêm thêm bớt 1 phần tử bất kỳ vào mảng)
// console.log(hoTen.splice(1,1,'Tran'))
// console.log(hoTen)
// 8.concat (Nối 2 mảng với nhau)
// console.log(hoTen.concat(hoTen2))
// 9. slice (cắt phần tử theo vị trí đã chọn)
// console.log(hoTen.slice(2,3))
// console.log(hoTen)

//Hàm

// 1. tạo hàm

// var hoTen = {
//     ho: 'Nguyen Xuan Huan',
//     tuoi: 18,
//     noio: 'Ha Noi, Viet Nam',
//     getname: function(){
//         return this.ho;
//     }
// }
// console.log(hoTen.getname())

// Hàm tạo đối tượng
// function User (firsName, lastNane, avatar){
//     this.firsName = firsName;
//     this.lastNane = lastNane;
//     this.avatar = avatar;
//     this.getname = function(){
//         return `${this.firsName} ${this.lastNane}`
//     }
// }
// User.prototype.truongHoc='THCS Dong Son'
// User.prototype.noiO = 'Ha Noi'
// User.prototype.khac = function(){
//     return this.truongHoc;
// }
// var nguoidung1 = new User ('Nguyen','Xuan','Huan','Ha Noi')
// var nguoidung2 = new User ('Vuong', 'Viet','Tien', 'Nghe An')
// console.log(nguoidung1.khac());
// console.log(nguoidung2);
// var date =new Date()
// console.log(date.getFullYear())
// var soTien = {
//     name : 'Javascript',
//     tien : 250000
// }
// if (soTien.tien > 0){
//     console.log(`${soTien.tien} VNĐ`)
// }
// else{
//     console.log('Hết tiền')
// }


// Vòng lặp for
//  for (var i =1; i<100; i++){
//     console.log (i)
//  }

// var hoten = [
//     'Nguyen',
//     'Xuan',
//     'Huan',
//     'Dep',
//     'Trai'
// ]
// sophanTu = hoten.length;
// for (i=0 ; i<sophanTu; i++){
//     console.log (hoten[i])
// var hoten ={
//     name: 'Nguyen Xuan Huan',
//     age: 18,
//     noiO: 'Ha Noi'
// }
// Vòng lặp for / in
// for (var ky in hoten){
//     console.log(ky)
// }

// var hoten = [
//     'Nguyen',
//     'Xuan',
//     'Huan',
//     'Dep',
//     'Trai'
// ]
// for (var stt in hoten){
//     console.log(hoten[stt])
// }
// var myString = 'Nguyen Xuan Huan'
// for(var stt in myString ){
//     console.log(myString[stt])
// }
// var object = {
//     ho: 'Nguyen',
//     tenDem:'Xuan',
//     ten: 'Huan'
// }
// console.log(object.tenDem)
// var hoTen = [
//     'Nguyen',
//     'Xuan',
//     'Huan',
//     'Dẹp',
//     'Trai'
// ]
// for (var stt in hoTen){
//     console.log(hoTen[stt])
// }
// Vòng lặp for / off
// var kyTu = [
//     'Em',
//     'Cua',
//     'Ngay',
//     'Hom',
//     'Qua'
// ]
// for (var so of kyTu){
//     console.log(kyTu)
// }
// var myString = 'Hoa vô sắc'
// for (var chuoi of myString){
//     console.log(myString)
// }
/*
Note:
- Vòng lặp for/in in ra số thứ tự của mảng hoặc key của object
- Vòng lặp for/of in ra luôn value của mảng hoặc của object
- Nếu vòng lặp for nhập nguyên biến đó vào thì hiện ra số lần bằng đúng các key trong biến đó*/

/*Note2: 
- Vòng lặp có thể dùng với :
        + 1 biến 
        + Chuỗi
        + Mảng 
        + Object
- Ngoại trừ vòng lặp for of phải dùng cách khác mới lặp được Object
*/
// Vòng lặp while

// var i =1;
// while(i<1000){
//     i=i+2;
//     console.log(i)
// }

// var hoTen =[
//     'Nguyen',
//     'Xuan ',
//     'Huan'
// ]
// sophantu = hoTen.length;
// var i = 0;
// while (i < sophantu){
//     console.log(hoTen[i])
//     i++
// }
// var hoten = {
//     ho: 'Nguyen',
//     tenDem: 'Xuan',
//     ten: 'Huan'

// }
// whi

//Vòng lặp Do/While
// Note3: 
/*
+ Vòng lặp sẽ lặp lại từ lần thứ 2
+ Vòng đầu tiên viết gì vào nó sẽ chạy cái đó
+ Và bắt đàu kiẻm tra điều kiện ở vòng lặp 2
*/
//Bài toán nạp thẻ thành công hay không
// var i = 0;
// var isSuccess  = true
// do{
//     i++;
//     console.log('Nạp thẻ lần ' + i)
//     if (true){
//         console.log('huan')
//     }
    
    
// }while(!isSuccess && i <3)

/* Giải thích: đặt biến bên trên không quan trọng
    + if (true){
        isSuccess=true
    } : tức là nếu đúng (nạp thẻ thành công) gán isSuccess=true --> !isSuccess tương đương với isSuccess = false */



                                                                            // LÀM LẠI
                                                
// var khoaHoc = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 500
//     }

// ]
// // Làm việc với mảng phần 2
// 1.forEach,
// 2.every
// 3.some
// 4. filter
// 5. map
// 6. reduce

// // var json  = '["javascript", "PHP"]'
// var json = '{"name":"huan", "tuoi":18}'
// console.log (JSON.parse(json))
// var mang = [
//     'Nguyen',
//     'Xuan',
//     'Huan'
// ]
// var object = {
//     name: 'Nguyen Xuan Huan',
//     tuoi: 19
// }
// console.log(JSON.stringify(object))
// setTimeout(function(){
//     console.log(1)
//     setTimeout(function(){
//         console.log(2)
//         setTimeout(function(){
//             console.log(3)
//             setTimeout(function(){
//                 console.log(4)
//             }, 1000)
//         }, 1000)
//     }, 1000)
    
// }, 1000)
//  var promise = new Promise(function(resolve, reject){
//     //Logic:
//     //Thành công: resolve ()
//     //Thất bại: reject ()
//     resolve()
//  })
//  promise 
//     .then(function(){
//         console.log('thanh  cong')
//     })
//     .catch(function(){
//         console.log('that bai')
//     })
//     .finally(function(){
//         console.log('xong')
//     })
//  Hàm map tự định nghĩa

// var formLogin = document.forms
// var arrayformLogin = Array.from(formLogin)
// console.log(typeof arrayformLogin)


// Tự tạo ra map
// var object = {
//     Ho: 'Nguyễn',
//     Tendem: 'Xuan',
//     ten: 'Huan',
// }
// console.log(typeof object)
// var convertArray = Array.from(object).map(function(giatri){
//     console.log(giatri)
// })

// Array.prototype.map1 = function (callback){
//     for (var i =0 ; i<this.length ; i++)
//     callback(this[i],i)
// }
// convertArray.map1(function(element, index){
//     console.log(index, element)
// })
// Array.prototype.map2 = function(callback){
//     for (var i = 0 ; i < this.length ; i++){
//         callback (this[i],i)
//     }
// }
var hoten = [
    'Nguyen',
    'Xuan',
    'Huan',
]
// hoten.map2(function(phantu, index){
//     console.log(index, phantu)
// })
// var courses = [
//     {
//         id: 1,
//         name: 'Trung',
//         coin: 250
//     },
//     {
        
//         id: 2,
//         name: 'Nam',
//         coin: 250
//     },
//     {
        
//         id: 3,
//         name: 'Danh',
//         coin: 250
//     },
//     {
        
//         id: 4,
//         name: 'Hung',
//         coin: 250
//     }
// ]
// var tong = courses.reduce(function(giatri1, giatri2){
//     return giatri1 + giatri2.name
// },{})
// console.log (tong)
// var json = '["Nguyễn","Xuân","Huấn"]'
// var arrayJson = JSON.parse(json)
// var hienthi = arrayJson.map(function(phantu){
//     return phantu
// })
// console.log(hienthi())
// var convert = [
//     'Nguyễn',
//     'Xuân',
//     'Huấn'
// ]
// var converttoJson = JSON.stringify(convert)
// console.log(typeof converttoJson)
// var promise = new Promise (
//     function (thanhcong, thatbai){
//         thanhcong()
//     }
// )
// promise 
//     .then(function(){
//         console.log('Thành công')
//         return 1;
//     })
//     .then(function(data){
//         console.log(data)
//         return 5
//     })
//     .then(function(data){
//         console.log(data)
//     })
//     .catch(function(){
//         console.log('Thất bại')
//     })
//     .finally(function(){
//         console.log('Xong')
//     })
// var thuchanh = document.querySelector('.huan1')
// console.log(thuchanh)
// thuchanh.onclick = function(){
    
// }
// var postApi = 'https://jsonplaceholder.typicode.com/posts'
// fetch(postApi)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(post){
//         var htmls = post.map(function(post){
//             console.log(post)
//         })
//     })
var courseApi = 'http://localhost:3000/courses'
function start (){
    getStuedent(renderStudent)
    xuLiformguidi()
}
start()
function getStuedent(callback){
    fetch(courseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
    }
function renderStudent (studens){
    var listStudentBlock = document.querySelector('#list-student')
    var htmls = studens.map(function(studen){
        return `
            <li>
                <p>${studen.name}</p>
                <p>${studen.content}</p>
                <button onclick="xoaSinhvien(${studen.id})">Xóa</button>
            </li>`
    })
    listStudentBlock.innerHTML = htmls.join('')
    
}
function themSinhvien (data, callback){
    var opition = {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, opition)
        .then(function(response){
            response.json()
        })
        .then(callback)
}


function xoaSinhvien(id){
    var opition = {
        method: 'DELETE',
        headers: {
            'Content-type':'application/json'
        },
    }
    fetch(courseApi +'/'+id, opition)
        .then(function(response){
            response.json()
        })
        .then(callback)
}


function xuLiformguidi (){
    var themBtn = document.querySelector('.guidi')
    themBtn.onclick = function(){
        var name = document.querySelector('.name').value
        var content = document.querySelector('.content').value
        var formData = {
            name: name,
            content: content
        }
        themSinhvien(formData)
        
    }
}
var nhapthongtin = document.querySelector('.tieude')
console.log(nhapthongtin)

    var namenew = document.querySelector('.hoten1').value
    var contentnew = document.querySelector('.truonghoc1').value
    var data = {
        name: namenew,
        content: contentnew
    }

    suaSinhvien(id, data,function(){laydanhsachSinhvien(renderStudent)})