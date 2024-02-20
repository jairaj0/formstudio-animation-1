
const navLinkAnimation = (ele) => {
    const preEl = ele.innerText;
    const text = preEl.split("");
    let newHtml = "";
    text.forEach((el) => {
      newHtml += `<span style="opacity: 0;">${el}</span>`;
    });
    ele.innerHTML = newHtml;
  
    hideAndShowTexts(ele);
  };
  
  const hideAndShowTexts = (ele) => {
    const spans = ele.querySelectorAll("span");
    let width = 0;
  
    const defaultState = () => {
      spans.forEach((el, i) => {
        if (i != 0) {
          el.style.left = `-${width}px`;
          el.style.opacity = 0;
        }else{
          el.style.opacity = 1;
        }
        width += el.offsetWidth;
      });
      ele.style.width = "45px";
    };
  
    defaultState();
  
    ele.addEventListener("mouseenter", () => {
      spans.forEach((el, i) => {
        if (i != 0) {
          el.style.left = "0px";
          el.style.opacity = 1;
        }
      });
      ele.style.width = `${30 + width}px`;
      width = 0;
    });
  
    ele.addEventListener("mouseleave", defaultState);
  };
  
  const navLinks = document.querySelectorAll(".navLink");
  
  navLinks.forEach((link) => navLinkAnimation(link));
  