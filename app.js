
$(document).ready(function(){
    
    $("#searchBtn").click(function(){

    let input = document.getElementById("searchInp").value;
    let button = document.getElementById("searchBtn");
        window.fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
        .then(result => result.json())
        .then(result => {
            let container = document.getElementById("cards-container");
            let html = '';
    
            result.meals.forEach(element => {   
                html += `  
    <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-3">           
    <div class="card " ">
     <img src="${element.strMealThumb}" class="card-img-top" >
     <div class="card-body">
         <h5 class="card-title"> ${element.strMeal}  </h5>
       
     </div>
     
    </div>
    </div>
    `
    
            })
    
            container.innerHTML = html ;
    
    
    
        })
        .catch(err => {
            alert("Sorry! This item is not available.", err);
         
        });
    });
    
  });