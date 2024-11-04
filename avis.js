export function ajoutListenersAvis() {

   const piecesElements = document.querySelectorAll(".fiches article button");
 
   for (let i = 0; i < piecesElements.length; i++) {
 
      piecesElements[i].addEventListener("click", function (event) {
 
         const id = event.target.dataset.id;
         fetch("https://8081-tibob92-7697016frontend-zgycm52jb1p.ws-eu116.gitpod.io"); 
      });
 
   }
 
}
 