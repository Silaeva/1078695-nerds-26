var link=document.querySelector(".write-us"),popup=document.querySelector(".form"),close=popup.querySelector(".button-close"),submit=popup.querySelector(".form-button"),user=popup.querySelector("[name=name]"),email=popup.querySelector("[name=email]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("user")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("form-show"),storage?(user.value=storage,email.focus()):user.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("form-show"),popup.classList.remove("form-error")}),submit.addEventListener("click",function(e){user.value&&email.value?isStorageSupport&&localStorage.setItem("user",user.value):(e.preventDefault(),popup.classList.remove("form-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("form-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("form-show")&&(e.preventDefault(),popup.classList.remove("form-show"),popup.classList.remove("modal-error"))});