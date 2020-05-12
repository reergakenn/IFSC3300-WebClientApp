/* Email List (v.2): clear button - Ch 8: ex 8-1 p.259 -an enhancement ex 6-3 on p. 199 */

$(document).ready(function() {
    $("#join_list").click(
        function() {
            var emailAddress1 = $("#email_address1").val();
            var emailAddress2 = $("#email_address2").val();
            var isValid = true;

            // validate the first email address
            if (emailAddress1 === "") { 
                $("#email_address1").next().text("This field is required.");
                isValid = false;
            } else {
                $("#email_address1").next().text("");
            } 

            // validate the second email address
            if (emailAddress2 === "") { 
                $("#email_address2").next().text("This field is required.");
                isValid = false; 
            } else if (emailAddress1 !== emailAddress2) { 
                $("#email_address2").next().text("This entry must equal first entry.");
                isValid = false;
            } else {
                $("#email_address2").next().text("");
            }

            // validate the first name entry  
            if ($("#first_name").val() === "") {
                $("#first_name").next().text("This field is required.");
                isValid = false;
            } 
            else {
                $("#first_name").next().text("");
            }

            // submit the form if all entries are valid
            if (isValid) {
                $("#email_form").submit(); 
                }

            //
            $(document).ready(function(){
				$("#clear_entries").click(function(){				
					if(confirm("Want to clear?")){
						/*Clear all input type="text" box*/
						$('#form1 input[type="text"]').val("");
						/*Clear textarea using id */
						$('#form1 #txtAddress').val("");
					}					
				});
			});
        } // end function 
    );	// end click
        
    $("#email_address1").focus();
}); // end ready
