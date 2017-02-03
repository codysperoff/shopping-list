var state = {
    items: []
};

var check = function () {
    $('.shopping-item').on('click', 'button'function (event) {
        this.toggleClass("shopping-item__checked");
    })
};

var addItem = function (item) {
    state.items.push(item);
    renderList();
}


var renderList = function (element) {
    var itemsHtml = state.items.map(function (item) {
        return '<li>\n\t<span class="shopping-item">' + item + '<\span>\n<div class="shopping-item-controls">\n\t<button class="shopping-item-toggle">\n\t<span class="button-label">' + check + '</span>\n'

    })
    $('.shopping-list').html(itemsHtml)
}
$(function () {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        console.log('made it here')
        addItem($('#shopping-list-entry').val());
    });
});
