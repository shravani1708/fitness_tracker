// Custom JavaScript
$(document).ready(function () {
  // Show login page on clicking the login button
  $('#homepage .btn-primary').click(function () {
    $('#homepage').addClass('d-none');
    $('#loginpage').removeClass('d-none');
  });

  // Start exercise button click event
  $('#start-exercise-btn').click(function () {
    var selectedExercise = $('#exercise-select').val();
    // You can perform actions based on the selected exercise here
    // For example, you can log the exercise to the history
    $('#exercise-dropdown').addClass('d-none');
    $('#exercise-history').removeClass('d-none');
    $('#history-list').append('<li class="list-group-item">Exercise: ' + selectedExercise + '</li>');
  });
});
