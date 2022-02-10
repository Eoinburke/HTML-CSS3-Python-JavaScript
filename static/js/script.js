/*
    jQuery for MaterializeCSS initialization
*/


$(document).ready(function () {
    $(".sidenav").sidenav({ edge: "right" });
    $(".collapsible").collapsible();
    $(".tooltipped").tooltip();
    $("select").formSelect();

    const modalOkBtn = document.getElementById('modal-ok-btn');
    $('.remove-btn').click((event) => {
        const modal = document.getElementById('confirmation-dialog');
        const instance = M.Modal.init(modal, { dismissible:false });
        instance.open();
        modalOkBtn.href = event.currentTarget.href;
        return false;
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
            ingredientField -= 1;
        }
    });

    var preparationField = $(".preparation").length;
    /* add new cloned item */
    $("#add_step").on("click", function () {
        $(".new-step:first").clone().insertBefore("#add_step").find("input[type='text'], select, textarea").val("");
        /* increase counter so original direction is never removed */
        preparationField += 1;
    });

    /* delete last cloned item */
    $("#remove_step").on("click", function () {
        if ( preparationField > 1) {
            /* only remove the :last item */
            $(this).siblings(".new-step:last").remove();
            /* ensure original direction line never gets deleted */
            preparationField-= 1;
        }
    });
});
