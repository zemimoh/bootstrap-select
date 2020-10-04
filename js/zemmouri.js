$(function () {

    $('.selectpicker.selectAll').on('changed.bs.select', function (e) {
        var index = e.handleObj.handler.arguments[1];

        var nb = this.length - 2;// $(e.currentTarget).find("option").length - 2;
        var selected = this.selectedOptions.length;//$(e.currentTarget).find("option:selected").length;

        if ($(this).find("option:first").prop('selected'))
            //exlure the first option from selected
            selected--;

        if (index && selected > 0 && selected < nb)
            //deselect first option
            $(this).find("option:first").prop('selected', false);
        else if (index == 0 || selected == nb) {
            //deselect all
            $(this).find("option:selected").prop("selected", false);
            //select first option
            $(this).find("option:first").prop('selected', true);
            //$(this).val("");
        }
        $(this).selectpicker('render');
    });   
});
