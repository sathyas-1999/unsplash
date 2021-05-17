const apiRoot = "https://api.unsplash.com";
const accessKey = "DUZJ4p_qKrFaihX9Wz5Elx8Td-2asj6K6vMQFADgY74";
//var fruits = [];
//const loader = document.getElementById('loader-img');
const addToDom = photos => {
  photos.forEach(photo => {
 //if(!fruits.includes(photo.id))
//fruits.push(photo.id);
//console.log(photo);
    let el = document.createElement("div");
    el.classList.add('image-item');
    el.style.backgroundColor = photo.color;
    el.innerHTML =
      `<img src="${photo.urls.regular}=">
	  <div class="containerimg">
	  <img src="${photo.user.profile_image.small}=" class="imgcls">
	  <p class="para1">${photo.user.username}</p>
	  </div>
	  <div class="icondiv">
	  <button class="iconbtn"><i class='fas fa-arrow-down'></i>
	  </button>
	  <button class="iconbtn2"><i class="fa fa-heart"></i></button>
	  <button class="iconbtn3"><i class="fa fa-plus"></i></button>
	</div>
`;
	document.querySelector('.image-grid').appendChild(el);
  });
};
/*const whiteHeart = '\u2661';
const blackHeart = '\u2665';
const z = document.getElementById('btn3');
z.addEventListener('click',function(event){
	event.preventDefault();
  const like = z.textContent;
  if(like==whiteHeart) {
    z.textContent = blackHeart;
    
  } else {
    z.textContent = whiteHeart;
  }
});*/

document.addEventListener('keypress', function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
				y="";
				search1();
			}
});
const search1 = () => {
let query="";
let stmt = document.getElementById("search");
let stmt1=document.getElementById("searchbar");
document.getElementById("myDIV").style.display="none";
document.getElementById("imagediv").innerHTML="";
//window.location.href="./Searchbar.html";
  let photos = [];
  if(stmt.value!="")
  {
	  query=stmt.value;
  }
  else if(stmt1.value!="")
  {
	  query=stmt1.value;
  }
    //loader.style.display = "block";
	fetch(`${apiRoot}/search/photos/?client_id=${accessKey}&query=${query}&page=1`)
    .then((res) => {
    return res.json();
  })
    .then(data => {
     //console.log(data['results']);
    photos.push(...data['results']);
    addToDom(photos);
	//loader.style.display = "none";

  })
    .catch( err => {
    console.log(err);
  });
};

const loadMore1 = temp => {
  let photos = [];
    //loader.style.display = "block";
	fetch(`${apiRoot}/photos/?client_id=${accessKey}&page=${temp}`)
    .then((res) => {
    return res.json();
  })
    .then(data => {
     console.log(data);
    photos.push(...data);
    addToDom(photos);
	//loader.style.display = "none";

  })
    .catch( err => {
    console.log(err);
  });
};

const search2 = temp => {
	let query="";
  let photos = [];
    //loader.style.display = "block";
	let stmt = document.getElementById("search");
	let stmt1=document.getElementById("searchbar");
	if(y!="")
  {
	  query=y;
  }
  else if(stmt1.value!="")
  {
	  query=stmt1.value;
  }
  else if(stmt.value!="")
  {
	  query=stmt.value;
  }
  //alert(query);
	fetch(`${apiRoot}/search/photos/?client_id=${accessKey}&query=${query}&page=${temp}`)
    .then((res) => {
    return res.json();
  })
    .then(data => {
     //console.log(data);
    photos.push(...data['results']);
    addToDom(photos);
	//loader.style.display = "none";

  })
    .catch( err => {
    console.log(err);
  });
};
let y="";
const func1 = (x) => {
//let stmt = document.getElementById("search");
//stmt.addEventListener('keypress', function(event) {
            //if (event.keyCode == 13) {
                //event.preventDefault();
				y=x;
				document.getElementById("myDIV").style.display="none";
document.getElementById("imagediv").innerHTML="";
  let photos = [];
  //let query = stmt.value;
    //loader.style.display = "block";
	fetch(`${apiRoot}/search/photos/?client_id=${accessKey}&query=${y}&page=1`)
    .then((res) => {
    return res.json();
  })
    .then(data => {
     //console.log(data['results']);
    photos.push(...data['results']);
    addToDom(photos);
	//loader.style.display = "none";

  })
    .catch( err => {
    console.log(err);
  });

};

const loadMore = () => {
  let photos = [];
    //loader.style.display = "block";
	fetch(`${apiRoot}/photos/?client_id=${accessKey}&page=1`)
    .then((res) => {
    return res.json();
  })
    .then(data => {
     //console.log(data);
    photos.push(...data);
    addToDom(photos);
	//loader.style.display = "none";

  })
    .catch( err => {
    console.log(err);
  });
};
let count=1;
window.addEventListener('scroll', function() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
	  let stmt=document.getElementById("search");
	  let stmt1=document.getElementById("searchbar");
count++;
if(stmt.value=="" && stmt1.value=="" && y=="")
{
	//alert(stmt.value);
    loadMore1(count);
}
else
{
	//alert(stmt.value);
	search2(count);
}
  }
});
loadMore();
var flag=0;
function func2()
{
 if(flag==0) 
  {
    flag=1;
document.getElementById("mySidenav").style.display="block";
  }
  else{
    flag=0;
document.getElementById("mySidenav").style.display="none";}
}
function func3()
{
 if(flag==0) 
  {
    flag=1;
document.getElementById("mySidenav1").style.display="block";
  }
  else{
    flag=0;
document.getElementById("mySidenav1").style.display="none";}
}
