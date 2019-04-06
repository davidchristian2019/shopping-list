function addShoppingItem(value){
	return `<li><span class="shopping-item">${value}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`
}

// create function "createShoppingItem" to enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
function createShoppingItem() {
	$('#js-shopping-list-form').on('submit', function(e){
		e.preventDefault();

		const value = $('#shopping-list-entry').val();
		console.log(value);

		$('.shopping-list').append($(addShoppingItem(value)));
		$('#shopping-list-entry').val('');
	});
};

// create function "checkShoppingItem" to check and uncheck items on the list by clicking the "Check" button
function checkShoppingItem(){
	$('.shopping-list').on('click', '.shopping-item-toggle', function(e){
		e.preventDefault();
		$(e.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

	})
}

// create function "removeShoppingItem" to permanently remove items from the list

function removeShoppingItem(){
	$('.shopping-list').on('click', '.shopping-item-delete', function(e){
		e.preventDefault();
		$(e.target).closest('li').remove();
	})
}

$(createShoppingItem)
$(checkShoppingItem)
$(removeShoppingItem)
