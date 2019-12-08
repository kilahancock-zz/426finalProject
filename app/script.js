function renderClassCard(course) {
    return `<div id="classCard" class="classCard">
                <h1 class="courseName">COMP ${course.number}: ${course.title}</h1>
                <p class="description">${course.description}</p>
                <h4 class="stats">${course.likes} Likes | ${course.dislikes} Dislikes</h4>
                <button onclick="dislike(${course.id})" class="swipeLeft" type="button"><i class="fa fa-thumbs-down"></i></button>
                <button onclick="like(${course.id})" class="swipeRight" type="button"><i class="fa fa-thumbs-up"></i></button></br>
                <div class="comment">Leave a comment:</div>
                <textarea id="commentText"></textarea></br>
                <button class="sendComment" type="submit" onclick="comment(${course.id})">Send</button>
            </div>`;
};

function renderCourseComments(course) {
    //TODO: request to get comments for the specific course
    return `<div id="courseComments" class="courseComments">
                <h3 class="center">Your Classmates' Thoughts on this Course:</h3>
                <h1>${course.id}</h1>
            </div>`;
};

function loadClassIntoDOM(course) {
    let $root = $('#classCard');
    let courseCard = renderClassCard(course);
    $root.replaceWith(courseCard);
};

function loadCommentsIntoDOM(course) {
    let $root = $('#courseComments');
    let commentsCard = renderCourseComments(course);
    $root.replaceWith(commentsCard);
}

function like(prevIndex) {
    let cur = prevIndex + 1;
    loadClassIntoDOM(classData[cur]);
    loadCommentsIntoDOM(classData[cur]);
    //TODO: request to update the number of likes
};

function dislike(prevIndex) {
    let cur = prevIndex + 1;
    loadClassIntoDOM(classData[cur]);
    loadCommentsIntoDOM(classData[cur]);
    //TODO: request to update the number of dislikes
};

function comment(courseID) {
    let text = document.getElementById("commentText").value;
    console.log(text);
    document.getElementById("commentText").value = "";
    //TODO: request to add comment 
}

$(function() {
    loadClassIntoDOM(classData[0]);
    loadCommentsIntoDOM(classData[0]);
});
