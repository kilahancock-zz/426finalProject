function renderClassCard(course) {
    return `<div class="classCard">
                <h1 class="courseName">COMP ${course.number}: ${course.title}</h1>
                <p class="description">${course.description}</p>
                <h4 class="stats">${course.likes} Likes | ${course.dislikes} Dislikes</h4>
                <button onclick="dislike(${course.id})" class="swipeLeft" type="button"><i class="fa fa-thumbs-down"></i></button>
                <button onclick="like(${course.id})" class="swipeRight" type="button"><i class="fa fa-thumbs-up"></i></button>
            </div>`;
};

function loadClassIntoDOM(course) {
    let $root = $('#classCard');
    let courseCard = renderClassCard(course);
    $root.replaceWith(courseCard);
};

function like(prevIndex) {
    let cur = prevIndex + 1;
    loadClassIntoDOM(classData[cur]);
    //TODO: axios request to update number of likes
};

function dislike(prevIndex) {
    let cur = prevIndex + 1;
    loadClassIntoDOM(classData[cur]);
    //TODO: axios request to update number of dislikes
};

$(function() {
    loadClassIntoDOM(classData[0]);
});
