function myFunction() {
    var x = document.getElementById("first-input").value;
    document.getElementById("demo").innerHTML = x;
}
document.getElementById("first-input").addEventListener('change', function() {
  this.value = remove(this.value);
});
function remove(string) {
    let result = Array.from(string).reduce((text, letter) => {
      let re = new RegExp(letter, "i");  
      return re.test(text) ? text : text+letter                   
    }, "");
    return result;
  }
