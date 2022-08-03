var baseUrl = "http://localhost:8080/CarRentalSystem_war_exploded/api/v1/user_registration";

$("btnSaveUser").click(function () {
    saveUser();
});
// var btn = document.getElementById("btnUser");
// btn.addEventListener("click", function() {
//     saveUser();
//
// }, false);

function saveUser(){
    console.log("---------=====")


    if($("#cmbUserType").val() =="CUSTOMER"){
        this.userType = 2;
    }




    var model = {


        userId:0,
        userName:$("#txtUserName").val(),
        email:$("#txtEmail").val(),
        password:$("#txtPassword").val(),
        address:$("#txtAddress").val(),
        licenseNo:$("#txtLicenseNo").val(),
        nic:$("#txtNic").val(),
        contactNo:$("#txtContactNo").val(),
        userType:$("#cmbUserType").val()
    }
    console.log(model+"-----------");

    console.log("----------------");

    var formData = new FormData();
    console.log("mama"+formData);
    formData.append("file",$("#licenseImg")[0].files[0]);
    formData.append("model",JSON.stringify(model));
    console.log(formData);

    var data = $("#userForm").serialize();
    console.log(data);
    $.ajax({
        cache:false,
        url:"http://localhost:8080/CarRentalSystem_war_exploded/api/v1/user_registration",
        enctype: 'multipart/form-data',
        contentType:false,
        processData: false,
        method:"POST",
        data:formData,
        success:function (res) {
            if(res.code == 200){
                alert("Sign Up successfully..")
                console.log("ggggggggggggg")
                console.log("llllllll"+formData)
            }
        },
        error:function (ob) {
            alert(ob.responseJSON.message)
        }
    });




}
console.log("bbbbbbbbbbbbbb")