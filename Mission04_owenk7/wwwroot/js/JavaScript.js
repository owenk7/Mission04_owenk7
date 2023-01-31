// Grade Calculator function using jQuery
$("#submit").on("click", function () {
    // collecting the percentages from the user
    let assignments_perc = $('#assignments').val();
    let group_perc = $('#group').val();
    let quizzes_perc = $('#quiz').val();
    let midterm_perc = $('#midterm').val();
    let final_perc = $('#final').val();
    let intex_perc = $('#intex').val();

    // multiplying the percentages by the weights
    let assignment_weight = (assignments_perc * .5);
    let group_weight = (group_perc * .1);
    let quiz_weight = (quizzes_perc * .1);
    let midterm_weight = (midterm_perc * .1);
    let final_weight = (final_perc * .1);
    let intex_weight = (intex_perc * .1);

    // totalling the weighted percentages:
    let total_grade = (assignment_weight +
        group_weight + quiz_weight + midterm_weight +
        final_weight + intex_weight);

    // if statements to determine overall grade:
    if (total_grade >= 94) {
        $("#output").html('Your final grade was an A (' + total_grade + '%)');
    }
    else if (total_grade >= 90) {
        $("#output").html('Your final grade was an A- (' + total_grade + '%)');
    }
    else if (total_grade >= 87) {
        $("#output").html('Your final grade was a B+ (' + total_grade + '%)');
    }
    else if (total_grade >= 84) {
        $("#output").html('Your final grade was a B (' + total_grade + '%)');
    }
    else if (total_grade >= 80) {
        $("#output").html('Your final grade was a B- (' + total_grade + '%)');
    }
    else if (total_grade >= 77) {
        $("#output").html('Your final grade was a C+ (' + total_grade + '%)');
    }
    else if (total_grade >= 74) {
        $("#output").html('Your final grade was a C (' + total_grade + '%)');
    }
    else if (total_grade >= 70) {
        $("#output").html('Your final grade was a C- (' + total_grade + '%)');
    }
    else if (total_grade >= 67) {
        $("#output").html('Your final grade was a D+ (' + total_grade + '%)');
    }
    else if (total_grade >= 64) {
        $("#output").html('Your final grade was a D (' + total_grade + '%)');
    }
    else if (total_grade >= 60) {
        $("#output").html('Your final grade was a D- (' + total_grade + '%)');
    }
    else {
        $("#output").html('Your final grade was a E (' + total_grade + '%)');
    }
});