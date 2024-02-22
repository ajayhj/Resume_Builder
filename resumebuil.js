let user_details={};

let user={};
function save(){
    $.ajax({
        type:"POST",
        url:"http://agaram.academy/api/action.php",
        data:{
            request : "create_resume",
            user : "ajayh",
            resume:user_details
        },
        success:function(response){
            //  console.log(response)
            
        },
        error:function(err){
            //  console.log(err)
        }
    })
    window.location="homepage.html"

}

function getdata(){
        $.ajax({
            type:"GET",
            url:"http://agaram.academy/api/action.php",
            data:{
                request : "get_user_resume",
                user : "ajayh",
                
            },
            success:function(response){
          response_data =JSON.parse(response)
            // console.log(response_data.data)
        
        
            let tabledata=""
             for(i=0;i<(response_data.data).length;i++){
                tabledata=tabledata+`
               <tr>
               <td id=''>${response_data.data[i].id}</td>
               <td id=''>${response_data.data[i].user}</td>
              <td id=''>${response_data.data[i].data}</td>
              <td><button class=" btn btn-primary" onclick="deleteitem('${response_data.data[i].id}')">delete</button></td>
              <td><a class="link-success" href="single.html?id=${response_data.data[i].id}">link</a></td>
             </tr> `
           }
             document.getElementById("list_table").innerHTML=tabledata;
             
          },
         error:function(err){
             console.log(err)
       }
     })
    
    //   window.location="homepage.html"
}
        
function deleteitem(id){
    // alert("hi")

    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:{
            request : "delete_user_resume",
            user : "ajayh",
            id
            
        },
        success:function(response){
        // console.log(response)
        // let deletedata=JSON.parse(response)
        // console.log(deletedata)
    
    },
    error:function(err){
        //  console.log(err)
        // getdata();
   }
 })
getdata();
}

function get_resume(idd){
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:{
            request : "get_resume_by_id",
            user : "ajayh",
            id:idd
            
        },
        success:function(response){
               let user_get=JSON.parse(response)
               console.log(user_get)
               console.log(user_get.data.data)
               let parsename=JSON.parse(user_get.data.data)
               console.log(parsename.skills)
               console.log(parsename.Language)
               let skill_shows=""
               for (i=0;i<(parsename.skills).length;i++){
                  skill_shows=skill_shows+`<li id="">${parsename.skills[i]}</li>`
                  console.log(skill_shows)
               }
               
                document.getElementById('triger_skil').innerHTML=skill_shows
               
        
                let language_shows=""
                for (i=0;i<(parsename.Language).length;i++){
                   language_shows=language_shows+`<li id="">${parsename.Language[i]}</li>`
                  
                }
               
                document.getElementById('triger_lan').innerHTML=language_shows

                
                let response_mail=parsename.mail
                document.getElementById("email").innerHTML=response_mail

                let response_objective=parsename.objective
                document.getElementById("objective").innerHTML=response_objective

                let response_number=parsename.mobile
                document.getElementById("mobile").innerHTML=response_number
           
                let response_name=parsename.name
                document.getElementById("name").innerHTML=response_name;
            
                let response_email=parsename.email
                document.getElementById("email").innerHTML=response_email;

                let response_address=parsename.address
                document.getElementById("address").innerHTML=response_address;
             
        
                let response_personaldetails=parsename.personal_details.Fathers_Name
                document.getElementById("Fathers_Name").innerHTML=response_personaldetails

                let response_personal_dob=parsename.personal_details.Date_of_birth
                document.getElementById("dob").innerHTML=response_personal_dob

                let response_personal_gender=parsename.personal_details.gender
                document.getElementById("gender").innerHTML=response_personal_gender
                
                let response_personal_marital=parsename.personal_details.marital_status
                document.getElementById("single").innerHTML=response_personal_marital
    },
    error:function(err){
        //  console.log(err)
        
   }
 })
}
 var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

  




function parsedata(a,p_key){
    // alert("hi")
    // user_details[a.name]=(a.value)
    // console.log(user_details)
    if (p_key)
    {
        if (user_details[p_key]){
            user_details[p_key]={...user_details[p_key]}
        }
        else{
            user_details[p_key]={};
        }
    
        user_details[p_key][a.name]=a.value
    }
    else{
        user_details[a.name]=a.value
     
    }
       console.log(user_details)
 display()
     
}

// skill function
function add(p_key,ele_id,skil_dis){
   
    if(!user_details[p_key]){
        user_details[p_key]=[]
    }
    user_details[p_key].push(document.getElementById(ele_id).value);
    document.getElementById(ele_id).value=""
    display()
    let skilltable=""
    console.log(user_details[p_key])
   
    for (i=0;i<user_details[p_key].length;i++){
        console.log()
        skilltable=skilltable+`<li id="${p_key[i]}">${user_details[p_key][i]}<button type="button" onclick="del_single_data('${p_key}','${[i]}')">delete</button></li>`
        console.log(skilltable)
        
    }
     document.getElementById(skil_dis).innerHTML=skilltable

console.log(user_details)
    }

    // edu function

function add_edudata(edu,list_muladats){
    // alert("hi")
    if (edu){
        if(!user_details[edu]){
         user_details[edu]=[]
    }
    user_details[edu].push(user)
    console.log(user_details)
    let keys=Object.keys(user)
    // keys la antha object oda keys matum iruku
    console.log(keys)
    for(i=0;i<keys.length;i++){
     console.log(keys.length)
    //  empty aki vidom
     document.getElementById(keys[i]).value = ""
      console.log(keys[i])
    }
   user={}
    display()

    listofdoubledatas=""
    for(i=0;i<user_details[edu].length;i++){
        console.log(user_details[edu].length)
        listofdoubledatas=listofdoubledatas+`
        <tr>
        <td id="${edu[i]}">${user_details[edu][i].institute_name}</td>
        <td id="${edu[i]}">${user_details[edu][i].level}</td>
        <td id="${edu[i]}">${user_details[edu][i].year}</td>
        <td id=""${edu[i]}">${user_details[edu][i].precentage}</td>
    
        <td><button class=" btn btn-primary" onclick="del_single_data('${edu}','${[i]}')">delete</button></td
        <tr>`

        // listofdoubledatas=listofdoubledatas+`<li id="${edu[i]}">${user_details[edu][i].institute_name}<button onclick="del_single_data('${edu}','${[i]}')">x</button></li>`
    }
    document.getElementById(edu).innerHTML=listofdoubledatas
}
}



function del_single_data(a,index){
    // alert (a)
    console.log(a,index)
    user_details[a].splice(index,1)
    deleteitem=document.getElementById(`${a[index]}`)
    deleteitem.remove()

    display()
}

function getmuldata(dta){
    // alert("hi/")
    user[dta.name]=dta.value

    // console.log(user_details)


}
function download_resume(){
    // alert("ok")
    window.print()
}

function display(){

     document.getElementById('display').innerHTML=JSON.stringify(user_details,undefined,2)}


         
    
    