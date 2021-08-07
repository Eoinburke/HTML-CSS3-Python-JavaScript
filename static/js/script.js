/*
    jQuery for MaterializeCSS initialization
*/

$(document).ready(function () {
    $(".sidenav").sidenav({edge: "right"});
});

 var ingredientField = $(".ingredient").length;
    $("#add_ingredient").on("click", function () {
        $("select").formSelect("destroy");
        $(".new-ingredient:first").clone().insertBefore("#add_ingredient").find("input[type='text'], select, textarea").val("");
        $("select").formSelect();
        ingredientField += 1;
    });

    $("#remove_ingredient").on("click", function () {
        if (ingredientField > 1) {
            /* only remove the :last item */
            $(this).siblings(".new-ingredient:last").remove();
            /* ensure original ingredient line never gets deleted */
            ingredientField-= 1;
        }
    });

    var preparationField = $(".preparation").length;
    /* add new cloned item */
    $("#add_step").on("click", function () {
        $(".new-step:first").clone().insertBefore("#add_step").find("input[type='text'], select, textarea").val("");
        /* increase counter so original direction is never removed */
       preparationField += 1;
    });



/*
    vanilla JavaScript for MaterializeCSS initialization
*/

// document.addEventListener('DOMContentLoaded', function () {
//     let sidenavs = document.querySelectorAll(".sidenav");
//     let sidenavsInstance = M.Sidenav.init(sidenavs, {edge: "right"});
// });