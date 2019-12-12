function renderClassCard(course) {
    return `<div id="classCard" class="classCard">
                <h1 class="courseName">COMP ${course.number}: ${course.title}</h1>
                <p class="description">${course.description}</p>
                <h4 class="stats">${course.likes} Likes | ${course.dislikes} Dislikes</h4>
                <button onclick="dislike(${course.id})" class="swipeLeft" type="button"><i class="fa fa-thumbs-down"></i></button>
                <button onclick="like(${course.id})" class="swipeRight" type="button"><i class="fa fa-thumbs-up"></i></button></br>
            </div>`;
};
async function getComments(id) {
    let result = []; 
    let x = await axios.get('http://localhost:3000/private/' + classData[id].number + '/comments',
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.token
                    }}, 
                ).then(response => {
                        posts = response.data.result;
                         result = posts;  
                    });
             return result;
}; 

async function renderCourseComments(course) {
    //TODO: request to get comments for the specific course
    let posts = await getComments(course.id)
    console.log(course.id);
    let comments = `<div id="courseComments" class="courseComments">
                <h3 class="center">Your Classmates' Thoughts on this Course:</h3>`;
            if (posts.length != 0) {
                for(let i = 0; i < posts.length; i++) {
                    comments += `<p> ${posts[i]}</p>`
                }
            }
               comments += `</div>`;
             
            return comments; 
};

function renderDeleteAccount() {
    return `<div id=<deleteAccount">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <button class="btn"><i class="fa fa-close"></i> Delete Account</button>`;
}

function loadClassIntoDOM(course) {
    let $root = $('#classCard');
    let courseCard = renderClassCard(course);
    $root.replaceWith(courseCard);
    var map;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 35.9132, lng: -79.055},
        zoom: 15
      });
     var marker = new google.maps.Marker({position: course.location, map: map});
 };
 

let button = document.getElementById("edit");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
button.onclick = function () {
   modal.style.display = "block";
};
span.onclick = function () {
   modal.style.display = "none";
};
window.onclick = function (event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
};


async function updateAccount() {
    let name = document.getElementById("name").value;
    let gpa = document.getElementById("gpa").value;
    let token = localStorage.token;
    axios.post('http://localhost:3000/user/info',
    { 
        data:{
                "name": name,
                "gpa": gpa
        }, 
    },
    {
        headers: {
            Authorization: "Bearer " + localStorage.token
        }
    }).then(res => {
        console.log(res); 
    });
 };
 
async function loadCommentsIntoDOM(course) {
    let $root = $('#courseComments');
    let commentsCard =await renderCourseComments(course);
    console.log(commentsCard);
    $root.replaceWith(commentsCard);
};
$( "#commentText" ).autocomplete({
          source: [ "love", "f", "uwu", "denial", "hate", "bored", "dislike", "indifference", "melancholy", "sadness", "disgust", "sorrow", "ecstasy", "despair", "like", "dislike",
           "displeasure", "woefullness", "happiness", "rage", "unhappiness", "woe", "elation", "grief", "fervor","agitation", "excitement", "joy", "pride", "bad vibes", "thrilled", "shame", "inspired", "remorse", "concerned", "apathy", "calmness", "peaceful", "tranquility", "lethargy", "endearment", "zen", "yearning", "xcited"]
        });

async function deleteAcc(event) {
    let $username = document.getElementById("user"); 
    axios.delete('localhost:3000/users', {
        headers: {
            Authorization: "Bearer " + localStorage.token
        }, 
    }).then(response => console.log(response)); 
    axios.delete('localhost:3000/account/' + $username); 
};

async function like(prevIndex) {
    let cur = 0; 
    if (prevIndex == 20) {
        cur = 0;  
    } else {
        cur = prevIndex + 1;
    }
    loadClassIntoDOM(classData[cur]);
    loadCommentsIntoDOM(classData[cur]);
    let f = localStorage.getItem('token');
    let currLikes = 0; 
     let r = await axios.get('http://localhost:3000/public/cards/' + classData[prevIndex].number + '/likes').then((response) => {
        currLikes = response.data.result 
    });
     axios.post('http://localhost:3000/public/cards/' + classData[prevIndex].number + '/likes',
        {
        data: currLikes + 1,
    }).then(response => {
        classData[prevIndex].likes = currLikes + 1;
        loadCommentsIntoDOM(classData[cur]);
    }).catch(error => {
        console.log(error);
    });
 
}


async function dislike(prevIndex) {
    let cur = 0; 
    if (prevIndex == 20) {
        cur = 0;  
    } else {
        cur = prevIndex + 1;
    }
    loadClassIntoDOM(classData[cur]);
    loadCommentsIntoDOM(classData[cur]);
    //TODO: request to update the number of dislikes
    let currDislikes = 0; 
     let r = await axios.get('http://localhost:3000/public/cards/' + classData[prevIndex].number + '/dislikes').then((response) => {
        currDisikes = response.data.result
    });


     axios.post('http://localhost:3000/public/cards/' + classData[prevIndex].number + '/dislikes',
        {
        data: currDislikes + 1,
    }).then(response => {
        classData[prevIndex].dislikes = currDislikes + 1;
        loadCommentsIntoDOM(classData[cur]);
    }).catch(error => {
        console.log(error);
    });;

};

async function comment() {
    let text = document.getElementById("commentText").value;
    // let f = localStorage.getItem('token');
    document.getElementById("commentText").value = "";
    //TODO: request to add comment 

    let r = await axios.get('http://localhost:3000/account/status',
     {
        headers: {
            Authorization: "Bearer " + localStorage.token
        }, 
    }).then(response => console.log(response)); 
    
    let x = await axios.post('http://localhost:3000/private/' + classData[localStorage.id].number + '/comments',
    {
        data: text,
        type: 'merge'
    }, 
    {
        headers: {
            Authorization: "Bearer " + localStorage.token
        }}, 
    ).then(response => {
        console.log(response);
        // renderCourseComments(classData[courseID]);
        loadCommentsIntoDOM(classData[localStorage.id]);
    }); 
}; 

async function updateAll () {

    for (let i = 0; i < 21; i++) {
        let r = await axios.get('http://localhost:3000/public/cards/' + classData[i].number + '/dislikes').then((response) => {
            classData[i].dislikes = response.data.result
        });
        let x =await axios.get('http://localhost:3000/public/cards/' + classData[i].number + '/likes').then((response) => {
            classData[i].likes = response.data.result
        });
    }
};

$(function() {
    updateAll();
    loadClassIntoDOM(classData[0]);
    loadCommentsIntoDOM(classData[0]);
});
