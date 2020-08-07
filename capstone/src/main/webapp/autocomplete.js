/**
 * Autocomplete
 * @param {inp}
 * @arg {arr}
 * @return {void}
 * Attributing this code to: w3 schools
 * Link: https://www.w3schools.com/howto/howto_js_autocomplete.asp
*/
function autocomplete(inp, arr) {
  let currentFocus;
  inp.addEventListener('input', function(e) {
    closeAllLists();
    let val = this.value;
    if (!val) { 
      return false;
    }
    currentFocus = -1;
    let a = document.createElement('DIV');
    a.setAttribute('id', this.id + 'autocomplete-list');
    a.setAttribute('class', 'autocomplete-items');
    this.parentNode.appendChild(a);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        let b = document.createElement('DIV');
        b.innerHTML = '<strong>' + arr[i].substr(0, val.length) + '</strong>';
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += '<input type='+'hidden'+'value='+arr[i]+'>';
        b.addEventListener('click', function(e) {
          inp.value = this.getElementsByTagName('input')[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  inp.addEventListener('keydown', function(e) {
    let x = document.getElementById(this.id + 'autocomplete-list');
    if (x) {
      x = x.getElementsByTagName('div');
    }
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) { 
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) {
          x[currentFocus].click();
        }
      }
    }
  });
  function addActive(x) {
    if (!x) {
      return false;
    }
    removeActive(x);
    if (currentFocus >= x.length) {
      currentFocus = 0;
    }
    if (currentFocus < 0) {
      currentFocus = (x.length - 1);
    }
    x[currentFocus].classList.add('autocomplete-active');
  }
  function removeActive(x) {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove('autocomplete-active');
    }
  }
  function closeAllLists(elmnt) {
    const autocomplete_items = document.getElementsByClassName('autocomplete-items');
    for (let i = 0; i < autocomplete_items.length; i++) {
      if (elmnt != autocomplete_items[i] && elmnt != inp) {
        autocomplete_items[i].parentNode.removeChild(autocomplete_items[i]);
      }
    }
  }
  document.addEventListener('click', function(e){
    closeAllLists(e.target);
  });
}