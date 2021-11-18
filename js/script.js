$(document).ready(function () {

    // Adding a "JavaScript is Enabled" Body Class

    $("body").addClass("js");

    $("#activities .read_more #NO1, #activities_popup_1 .close_button a").click(function (event) {
        event.preventDefault();
        $("body").toggleClass("show_activities_popup_1");
    });

    $("#activities .read_more #NO2, #activities_popup_2 .close_button a").click(function (event) {
        event.preventDefault();
        $("body").toggleClass("show_activities_popup_2");
    });

    //Pass a class name to the selector to initialize the plugin.
    $("#activities .normal figure").scrollClass({
        delay: 1000,
        callback: function () { //fire a callback
            console.log('Callback fired!');
        }
    });

    // "Become Part of the Story!" Form Submission

    $("#booking_information #booking_form").submit(function (event) {

        var firstName = $("#form_first_name").val();
        var lastName = $("#form_last_name").val();
        var phonenumber = $("#form_phone_number").val();
        var emailaddress = $("#form_email_address").val();
        var complete = false;

        console.log(firstName);
        console.log(lastName);
        console.log(phonenumber);
        console.log(emailaddress);

        if (firstName != "" && lastName != "" && phonenumber != "" && emailaddress != "") {
            complete = true;
        }

        if (firstName == "") {
            $("#form_first_name").addClass("error");
            $("#form_first_name").parent().parent().find("label").addClass("error");
        }

        if (lastName == "") {
            $("#form_last_name").addClass("error");
            $("#form_last_name").parent().parent().find("label").addClass("error");
        }

        if (phonenumber == "") {
            $("#form_phone_number").addClass("error");
            $("#form_phone_number").parent().parent().find("label").addClass("error");
        }
        if (emailaddress == "") {
            $("#form_email_address").addClass("error");
            $("#form_email_address").parent().parent().find("label").addClass("error");
        }

        if (complete) {

            console.log("Complete Form");
            $("#booking_information #booking_form button").html("All Done!").attr('disabled', true);

        }
        else {
            console.log("Incomplete Form");
            $("#booking_information #booking_form button").html("You forgot something");
        }
        
        $("#form_first_name,#form_last_name,#form_phone_number,#form_email_address").keydown(function () {
            $(this).removeClass("error");
            $(this).parent().parent().find("label").removeClass("error");
        });
        event.preventDefault();

    });


    // Simple Guessing Game for the viewer to win a discount.

    function runQuestion(event) {

        var user_answer = $("#form_answer").val();
        console.log("User answer: " + user_answer);

        var message = "";
        var messageColour = "";


        if (user_answer == 'Lubeck'|| user_answer == 'Lübeck') {
            message = "Nice work! You have won a discount!";
            messageColour = "green";

        }
        else {
            message = "Nah you missed the chance. Try again" ;
            messageColour = "red";

        }
        
        //alert(message);

        $("#discount_form .question_answer").html(message).css("color", messageColour);

        event.preventDefault();

    }

    $("#booking_information #discount_form").submit(runQuestion);


});