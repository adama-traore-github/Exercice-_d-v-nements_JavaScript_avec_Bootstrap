document.addEventListener("DOMContentLoaded", function() {
    let compteur = 0; 
    const footer = document.getElementById("footer");
    if (footer) {
        footer.addEventListener("click", function() {
            compteur++; 
            console.log("clic numéro " + compteur); 
        });
    } 


    const toggleButton = document.querySelector('.navbar-toggler');
    const navbarHeader = document.getElementById('navbarHeader');
  
    // Ajouter un gestionnaire d'événement au clic du bouton
    toggleButton.addEventListener('click', function() {
      // Vérifier si l'élément a la classe 'collapse'
      if (navbarHeader.classList.contains('collapse')) {
        // Si oui, retirer la classe 'collapse'
        navbarHeader.classList.remove('collapse');
      } else {
        // Sinon, ajouter la classe 'collapse'
        navbarHeader.classList.add('collapse');
      }
    });

     // Sélectionner le premier bouton "Edit"
  const firstEditButton = document.querySelectorAll('.btn-outline-secondary')[0];

  firstEditButton.addEventListener('click', function() {

    // Sélectionner le texte de la première carte
    const cardText = document.querySelectorAll('.card .card-text')[0];

    cardText.style.color = 'red';
  });

  // Sélectionner le bouton "Edit" de la deuxième carte
  const secondEditButton = document.querySelectorAll('.btn-outline-secondary')[1];

  // Variable pour suivre l'état de la couleur du texte
  let isGreen = false;

  // Ajouter un gestionnaire d'événement au clic du bouton
  secondEditButton.addEventListener('click', function() {

    const cardText = document.querySelectorAll('.card-text')[1];

    // Vérifier l'état actuel et basculer la couleur du texte
    if (isGreen) {
      cardText.style.color = ''; // Réinitialiser à la couleur d'origine
    } else {
      cardText.style.color = 'green'; // Changer la couleur en vert
    }
    
    // Inverser l'état de la couleur
    isGreen = !isGreen;
  });

   // Sélectionner la navbar
   const navbar = document.querySelector('.navbar');
  
   // Variables pour suivre les états
   let isHidden = false;
   
   // Stocker les éléments CSS de Bootstrap
   let bootstrapLink = document.querySelector('link[rel="stylesheet"][href*="bootstrap"]');
 
   // Ajouter un gestionnaire d'événement au double-clic
   navbar.addEventListener('dblclick', function() {
     if (isHidden) {
       // Réactiver Bootstrap en réajoutant le lien CSS
       if (!bootstrapLink) {
         bootstrapLink = document.createElement('link');
         bootstrapLink.rel = 'stylesheet';
         bootstrapLink.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
         document.head.appendChild(bootstrapLink);
       }
     } else {
       // Cacher Bootstrap en supprimant le lien CSS
       if (bootstrapLink) {
         bootstrapLink.remove();
         bootstrapLink = null;
       }
     }
     
     // Inverser l'état de la visibilité
     isHidden = !isHidden;
   });

    // Sélectionner toutes les cards
  const cards = document.querySelectorAll('.card');

  // Fonction pour réduire la card
  function shrinkCard(event) {
    const card = event.currentTarget;
    const image = card.querySelector('.card-img-top');
    const text = card.querySelector('.card-text');
    const buttons = card.querySelectorAll('.btn');

    // Réduire l'image à 20% de sa taille d'origine
    image.style.width = '20%';
    image.style.height = 'auto'; // Conserver les proportions
    text.style.display = 'none'; // Cacher le texte
    buttons.forEach(button => button.style.display = 'block'); // Garder les boutons visibles
  }

  // Fonction pour restaurer la card
  function restoreCard(event) {
    const card = event.currentTarget;
    const image = card.querySelector('.card-img-top');
    const text = card.querySelector('.card-text');
    const buttons = card.querySelectorAll('.btn');

    // Restaurer l'image à sa taille originale
    image.style.width = '';
    image.style.height = '';
    text.style.display = ''; // Restaurer le texte
    buttons.forEach(button => button.style.display = ''); // Restaurer les boutons
  }

  // Ajouter les gestionnaires d'événements aux cards
  cards.forEach(card => {
    card.addEventListener('mouseenter', shrinkCard);
    card.addEventListener('mouseleave', restoreCard);
  });

 
});
