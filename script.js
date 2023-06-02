const toggleButtons = document.getElementsByClassName("button");
const arr = [...toggleButtons];

arr.forEach((element, index) => {
    element.addEventListener("click", () => {
      element.style.opacity = "1";
      if (index == 0) {
        document.documentElement.setAttribute('data-theme', 'default');
      } 
      
      else {
        document.documentElement.setAttribute('data-theme', "light");
      }
   
      arr
        .filter(function (item) {
          return item != element;
        })
        .forEach((item) => {
          item.style.opacity = "0";
        });
    });
  });