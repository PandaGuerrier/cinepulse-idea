import { AnimatedFilmChoice } from '@/ui/animated-film-choice'
import { Toaster } from 'sonner'

export default function Home() {
  const testimonials = [
    {
      quote: "Harry Potter est un film fantastique qui nous plonge dans un monde magique rempli d'aventures et de mystères.",
      name: "Harry Potter",
      tags: ["Science-Fiction", "Comedie", "Action"],
      image: "https://www.closeupshop.fr/media/oart_0/oart_h/oart_96658/1070074_G880485_07.JPG",
    },
    {
      quote: "Sonic, Knuckles et Tails sont à nouveau réunis face à un puissant nouvel adversaire, Shadow, un mystérieux vilain doté de pouvoirs comme ils n'en ont encore jamais vu. Leurs habiletés étant toutes surclassées, l'Équipe Sonic doit tenter une alliance improbable dans l'espoir d'arrêter Shadow et de protéger la planète.",
      name: "Sonic 3, le film",
      tags: ["Action",
        "Science-fiction",
        "Comédie",
        "Famille"],
      image: "https://m.media-amazon.com/images/M/MV5BNGRhYjY5MWItNGI0ZS00OTVkLTkyYWYtMzYwYjU1NTk3YWIyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      quote: "Harry Potter est un film fantastique qui nous plonge dans un monde magique rempli d'aventures et de mystères.",
      name: "Captain America : Brave New World",
      tags: ["Science-Fiction", "Thriller", "Action"],
      image: "https://fr.web.img2.acsta.net/img/92/55/9255d9aeb17004f6a622cc47e573777e.jpg",
    },
    {
      quote: "Lors d'un safari avec son père Nikolai, un oligarque russe dont la cruauté a jadis poussé sa mère au suicide, Sergei Kravinoff est attaqué par un lion, qui vient très près de le tuer. La potion miraculeuse de Calypso, une prêtresse vaudou, permet non seulement au garçon de survivre ; elle lui confère aussi une force surhumaine et un nouvel objectif : protéger la nature des braconniers et des criminels de toutes sortes. Élevé au titre de \"chasseur\", ses faits d’armes attirent rapidement l’attention d’un assassin redoutable, dont les pouvoirs sont comparables aux siens : le Rhino.",
      name: "Kraven the Hunter",
      tags: ["Thriller", "Aventure", "Action"],
      image: "https://fr.web.img3.acsta.net/img/bf/75/bf759d8af9d0eb3b279a802b179ae4cb.jpg",
    },
    {
      quote: "Le Cardinal Lawrence est chargé de gérer ce processus confidentiel après la mort inattendue du Pape bien-aimé. Lorsque tous les dirigeants les plus puissants de l’Église catholique sont réunis et enfermés dans le Vatican, Lawrence se retrouve au centre d’une conspiration et découvre un secret qui pourrait changer à jamais l’institution religieuse.\n" +
          "\n",
      name: "Conclave",
      tags: ["Thriller", "Drame", "Mystère"],
      image: "https://m.media-amazon.com/images/S/pv-target-images/90675cc6356f893ec6f202b0e402319129e456479db0dce57fbb7da91469fac4.jpg",
    },
  ];
  return (
      <>
        <Toaster />
        <AnimatedFilmChoice films={testimonials} />
      </>
  );
}
