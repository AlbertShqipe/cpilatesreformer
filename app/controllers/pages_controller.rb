class PagesController < ApplicationController
  def home
  end
  def pilates_reformer
  end
  def test
    @reviews = [
      { author: 'Emilie Passot', rating: 5, text: "Les cours de Pilates Reformer de Chiara sont excellents. Sa bienveillance, son attention du détail et ses explications m’ont permis de progresser. Chaque séance est complète et le temps passe en un éclair, mais on en ressent pas moins les effets après. Je recommande vivement pour ceux qui souhaitent progresser dans un cadre à la fois plaisant et motivant !" },
      { author: 'anne charra', rating: 5, text: "Je pratique le Pilates Reformer depuis septembre. Je suis ravie de mon expérience et du professionnalisme de Chiara. La salle est agréable et intimiste, avec seulement trois machines, ce qui permet des cours bien encadrés. L’ambiance est conviviale, et les séances sont à la fois structurées et efficaces. Une excellente adresse pour progresser en toute confiance !" },
      { author: 'isabelle DELANNOY', rating: 5, text: "J'ai commencé le Pilates Reformer avec Chiara il y 2 mois et j'adore. Elle est très professionnelle et s'assure que vous faites les bons mouvements , que les posture sont bonnes. On est en petit groupe (rien à voir avec ces nouvelles salles ) donc elle peut vraiment s'occuper de vous. Je recommande vivement."},
      { author: 'Marion Cebelieu', rating: 5, text: "J'ai découvert le Pilates Reformer avec Chiara. Cette un exercice qui demande de la rigueur et de la concentration mais qui procure tellement de bien. Tous les muscles sont sollicités et dans l'étirement constamment ! On se muscle tout en gagnant en mobilité ! Chiara a toujours un œil bienveillant et corrige parfaitement les postures tout au long du cours. Ses explications permettent de trouver la bonne position, de s'auto corriger et donc de progresser. Je recommande vivement !" },
      { author: 'Manon', rating: 5, text: "Novice en sport et pas très motivée en temps normal : j’ai découvert le pilates reformer avec Chiara et j’en suis ravie ! Professeur toujours à l’écoute, cours adaptés à tous les niveaux, elle sait motiver tout en veillant à ce que les mouvements soient correctement réalisés. Je constate déjà des progrès, merci beaucoup !" },
      { author: 'Karine Palatte', rating: 5, text: "Très bonne expérience . Un cours dynamique sous le regard attentif de Chiara . Je recommande vivement ." },
      { author: 'Anne-Valérie ANGERARD', rating: 5, text: "Séances très variées et ludiques très bien expliqué par Chiara. Un vrai moment de plaisir." },
      { author: 'Audrey Tesse', rating: 5, text: "Chiara la meilleure prof de pilate reformer! Venez tester ses cours vous y deviendrez accro!" },
      { author: 'Marco Merenda', rating: 5, text: "Très professionnelle et sympathique, je conseille fortement." }
    ]
  end
  def about
  end
  def contact
  end
  def classes
    @reviews = [
      { author: 'Emilie Passot', rating: 5, text: "Les cours de Pilates Reformer de Chiara sont excellents. Sa bienveillance, son attention du détail et ses explications m’ont permis de progresser. Chaque séance est complète et le temps passe en un éclair, mais on en ressent pas moins les effets après. Je recommande vivement pour ceux qui souhaitent progresser dans un cadre à la fois plaisant et motivant !" },
      { author: 'anne charra', rating: 5, text: "Je pratique le Pilates Reformer depuis septembre. Je suis ravie de mon expérience et du professionnalisme de Chiara. La salle est agréable et intimiste, avec seulement trois machines, ce qui permet des cours bien encadrés. L’ambiance est conviviale, et les séances sont à la fois structurées et efficaces. Une excellente adresse pour progresser en toute confiance !" },
      { author: 'isabelle DELANNOY', rating: 5, text: "J'ai commencé le Pilates Reformer avec Chiara il y 2 mois et j'adore. Elle est très professionnelle et s'assure que vous faites les bons mouvements , que les posture sont bonnes. On est en petit groupe (rien à voir avec ces nouvelles salles ) donc elle peut vraiment s'occuper de vous. Je recommande vivement."},
      { author: 'Marion Cebelieu', rating: 5, text: "J'ai découvert le Pilates Reformer avec Chiara. Cette un exercice qui demande de la rigueur et de la concentration mais qui procure tellement de bien. Tous les muscles sont sollicités et dans l'étirement constamment ! On se muscle tout en gagnant en mobilité ! Chiara a toujours un œil bienveillant et corrige parfaitement les postures tout au long du cours. Ses explications permettent de trouver la bonne position, de s'auto corriger et donc de progresser. Je recommande vivement !" },
      { author: 'Manon', rating: 5, text: "Novice en sport et pas très motivée en temps normal : j’ai découvert le pilates reformer avec Chiara et j’en suis ravie ! Professeur toujours à l’écoute, cours adaptés à tous les niveaux, elle sait motiver tout en veillant à ce que les mouvements soient correctement réalisés. Je constate déjà des progrès, merci beaucoup !" },
      { author: 'Karine Palatte', rating: 5, text: "Très bonne expérience . Un cours dynamique sous le regard attentif de Chiara . Je recommande vivement ." },
      { author: 'Anne-Valérie ANGERARD', rating: 5, text: "Séances très variées et ludiques très bien expliqué par Chiara. Un vrai moment de plaisir." },
      { author: 'Audrey Tesse', rating: 5, text: "Chiara la meilleure prof de pilate reformer! Venez tester ses cours vous y deviendrez accro!" },
      { author: 'Marco Merenda', rating: 5, text: "Très professionnelle et sympathique, je conseille fortement." }
    ]
  end
  def reviews
    @reviews = [
      { author: 'Emilie Passot', rating: 5, text: "Les cours de Pilates Reformer de Chiara sont excellents. Sa bienveillance, son attention du détail et ses explications m’ont permis de progresser. Chaque séance est complète et le temps passe en un éclair, mais on en ressent pas moins les effets après. Je recommande vivement pour ceux qui souhaitent progresser dans un cadre à la fois plaisant et motivant !" },
      { author: 'anne charra', rating: 5, text: "Je pratique le Pilates Reformer depuis septembre. Je suis ravie de mon expérience et du professionnalisme de Chiara. La salle est agréable et intimiste, avec seulement trois machines, ce qui permet des cours bien encadrés. L’ambiance est conviviale, et les séances sont à la fois structurées et efficaces. Une excellente adresse pour progresser en toute confiance !" },
      { author: 'isabelle DELANNOY', rating: 5, text: "J'ai commencé le Pilates Reformer avec Chiara il y 2 mois et j'adore. Elle est très professionnelle et s'assure que vous faites les bons mouvements , que les posture sont bonnes. On est en petit groupe (rien à voir avec ces nouvelles salles ) donc elle peut vraiment s'occuper de vous. Je recommande vivement."},
      { author: 'Marion Cebelieu', rating: 5, text: "J'ai découvert le Pilates Reformer avec Chiara. Cette un exercice qui demande de la rigueur et de la concentration mais qui procure tellement de bien. Tous les muscles sont sollicités et dans l'étirement constamment ! On se muscle tout en gagnant en mobilité ! Chiara a toujours un œil bienveillant et corrige parfaitement les postures tout au long du cours. Ses explications permettent de trouver la bonne position, de s'auto corriger et donc de progresser. Je recommande vivement !" },
      { author: 'Manon', rating: 5, text: "Novice en sport et pas très motivée en temps normal : j’ai découvert le pilates reformer avec Chiara et j’en suis ravie ! Professeur toujours à l’écoute, cours adaptés à tous les niveaux, elle sait motiver tout en veillant à ce que les mouvements soient correctement réalisés. Je constate déjà des progrès, merci beaucoup !" },
      { author: 'Karine Palatte', rating: 5, text: "Très bonne expérience . Un cours dynamique sous le regard attentif de Chiara . Je recommande vivement ." },
      { author: 'Anne-Valérie ANGERARD', rating: 5, text: "Séances très variées et ludiques très bien expliqué par Chiara. Un vrai moment de plaisir." },
      { author: 'Audrey Tesse', rating: 5, text: "Chiara la meilleure prof de pilate reformer! Venez tester ses cours vous y deviendrez accro!" },
      { author: 'Marco Merenda', rating: 5, text: "Très professionnelle et sympathique, je conseille fortement." }
    ]
  end
end
