document.body.onload = function() {
  const arr = ['Hello', 'Hi', 'Howdy', 'Yello'];
  autocomplete(arr);
};

/**
 * @param {string[]} arr
 * @return {void}
 * Attributing this code to: w3 schools
 * Link: https://www.w3schools.com/howto/howto_js_autocomplete.asp
*/
function autocomplete(arr) {
  const currentFocus = -1;
  const inp = document.getElementById('search');
  /* Event occurrance when input is provided to autocomplete field */
  inp.addEventListener('input', function(e) {
    closeAllLists();
    const val = this.value;
    if (!val) {
      return false;
    }
    currentFocus = -1;
    const autocompleteList = document.createElement('div');
    autocompleteList.setAttribute('id', this.id + 'autocomplete-list');
    autcompleteList.setAttribute('class', 'autocomplete-items');
    this.parentNode.appendChild(autocompleteList);
    for (arrElt in arr) {
      if (arrElt.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        const listElmt = document.createElement('DIV');
        listElmt.innerHTML = '<strong>' +
                             arrElt.substr(0, val.length) +
                             '</strong>';
        listElmt.innerHTML += arrElt.substr(val.length);
        listElmt.innerHTML += '<input type='+'hidden'+'value='+arrElt+'>';
        listElmt.addEventListener('click', function(e) {
          inp.value = this.getElementsByTagName('input')[0].value;
          closeAllLists();
        });
        autocompleteList.appendChild(listElement);
      }
    }
  });

  /* Event occurance when arrow keys are pressed */
  inp.addEventListener('keydown', function(e) {
    const listElmt = document.getElementById(this.id + 'autocomplete-list');
    if (listElmt) {
      listElmt = listElmt.getElementsByTagName('div');
    }
    if (e.keyCode == 40) {/* Up key */
      currentFocus++;
      addActiveTag(listElmt);
    } else if (e.keyCode == 38) {/* Down key */
      currentFocus--;
      addActiveTag(listElmt);
    } else if (e.keyCode == 13) {/* Enter key */
      e.preventDefault();
      if (currentFocus > -1) {
        if (listElmt) {
          listElmt[currentFocus].click();
        }
      }
    }
  });

  /**
   * @param {Object} autocompleteListElmt
   * @return {bool}
   * Adds the 'active' tag to an autocomplete elmt
   */
  function addActiveTag(autocompleteListElmt) {
    if (!autocompleteListElmt) {
      return false;
    }
    removeActiveTag(autocompleteListElmt);
    if (currentFocus >= autocompleteListElmt.length) {
      currentFocus = 0;
    } else if (currentFocus < 0) {
      currentFocus = (autocompleteListElmt.length - 1);
    }
    autocompleteListElmt[currentFocus].classList.add('autocomplete-active');
  }

  /**
   * @param {Object} autocompleteListElmt
   * @return {void}
   * Removes the 'active' tag from an autocomplete elmt
   */
  function removeActiveTag(autocompleteListElmt) {
    for (listElmt in autocompleteListElmt) {
      listElmt.classList.remove('autocomplete-active');
    }
  }

  /**
   * @param {Object} elmnt
   * @return {void}
   * Closes dropdown autocomplete list(s)
   */
  function closeAllLists(elmnt) {
    const autoItems = document.getElementsByClassName('autocomplete-items');
    for (item in autoItems) {
      if (elmnt != item && elmnt != inp) {
        item.parentNode.removeChild(item);
      }
    }
  }

  /* Event occurance when mouse is clicked */
  document.addEventListener('click', function(e) {
    closeAllLists(e.target);
  });
};
