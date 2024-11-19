import BasePage from "../components/Basepage";
import PersonalBranding from "../components/PersonalBranding";

import { Clasical, Link } from "../components/typography";
import MathieuLePtit from "../assets/pictures/mathieu.png";
import AnjaraLeMercenaire from "../assets/pictures/anjara.jpg";
import NabilLeStratège from "../assets/pictures/nabil.jpg";
import AmelieLaStagiaire from "../assets/pictures/amelie.png";
import HugoLeMarseillais from "../assets/pictures/hugo.png";

const Team = () => {
  return (
    <>
      <Clasical className={"absolute left-1/2 top-10"}>
        Si le scroll marche pas, faut refresh
      </Clasical>
      <BasePage title="Crew" scrollable>
        <div className="w-full h-full flex flex-full gap-10 items-center justify-center">
          <div className="flex justify-around gap-6 mt-10">
            <PersonalBranding
              name="Mathieu Souflis"
              role="Product Owner"
              image={MathieuLePtit}
            >
              <Clasical>
                C’est un grand plaisir de pouvoir vous partager le travail que
                nous avons réalisé en collaboration avec Anjara Adriatseheno,
                Nabil Lmrabet, Amélie Dahmoune et Hugo Antonini lors de notre
                cour de Gestion de Projet à HETIC.
              </Clasical>
              <Clasical>
                Ce projet a été une opportunité pour nous de découvrir ainsi que
                de comprendre comment fonctionne l’IA et d’apprendre le travail
                en équipe à l’aide de la méthode SCRUM.
              </Clasical>
              <Clasical>
                Je vous partage ci-joint un site fait par nos soins exposant
                notre travail (il est préférable de l’ouvrir depuis un
                ordinateur)
              </Clasical>
              <Link href={"https://ai-project.mathieusouflis.com"}>
                https://ai-project.mathieusouflis.com
              </Link>
            </PersonalBranding>
            <PersonalBranding
              name="Nabil Lmrabet"
              role="Scrum Master"
              image={NabilLeStratège}
            >
              <Clasical>
                Voilà enfin le site qui conclut notre projet sur les Ia
                génératrice d'images !
              </Clasical>
              <Clasical>
                Un grand merci à Mathieu Souflis, Anjara Andriatseheno, Amélie
                Dahmoune et Hugo Antonini pour ce travail commun !
              </Clasical>
              <Link href="https://gp-p1-visual-arts-and-ai.vercel.app/  ">
                https://gp-p1-visual-arts-and-ai.vercel.app/
              </Link>
              <Clasical>#Website #Hetic #Ai</Clasical>
            </PersonalBranding>
          </div>
        </div>
        <div className="w-full h-full flex flex-full gap-10 items-center justify-center">
          <div className="flex justify-around gap-6 mt-10">
            <PersonalBranding
              name="Anjara Andriatseheno"
              role="Team Member"
              image={AnjaraLeMercenaire}
            >
              <Clasical>
                Voilà enfin le site qui conclut notre projet sur les Ia
                génératrice d'images !
              </Clasical>

              <Clasical>
                Un grand merci à Mathieu Souflis, Anjara Andriatseheno, Amélie
                Dahmoune et Hugo Antonini pour ce travail commun !
              </Clasical>
              <Link href="https://gp-p1-visual-arts-and-ai.vercel.app/  ">
                https://gp-p1-visual-arts-and-ai.vercel.app/
              </Link>
              <Clasical>#Website #Hetic #Ai</Clasical>
            </PersonalBranding>
            <PersonalBranding
              name="Amelie Dahmoune"
              role="Team Member"
              image={AmelieLaStagiaire}
            >
              <Clasical>
                ✨ Nouvelle étape dans mon parcours à HETIC ! ✨
              </Clasical>

              <Clasical>
                En tant qu’étudiante en développement web à HETIC, j'ai eu
                l’opportunité de participer à un projet de groupe passionnant
                sur les générateurs d’images. 🖼️
              </Clasical>
              <Clasical>
                Notre équipe a travaillé dur pour concevoir un site web qui met
                en avant l’utilisation innovante des générateurs d'images, et je
                suis fière de dire que nous avons brillamment présenté notre
                travail ! 💻
              </Clasical>
              <Clasical>
                🎯 Mon rôle principal dans ce projet était de sélectionner les
                images pertinentes pour le site et décrire chacunes et faire une
                petite recherche sur l iIA de coté.
              </Clasical>
              <Clasical>
                Ce travail collaboratif m’a permis d'apprendre énormément, de
                renforcer mes compétences en gestion de projet et d'affiner mon
                œil pour la création visuelle. 🎨
              </Clasical>
              <Clasical>
                C'est une expérience enrichissante qui m'a permis de grandir
                professionnellement et de voir l'importance de l’équipe dans la
                réussite d’un projet.
              </Clasical>
              <Clasical>
                {" "}
                🤝 Merci à mes coéquipiers pour leur travail et leur
                enthousiasme !
              </Clasical>
              <Clasical>
                #HETIC #DéveloppementWeb #WebDesign #ImageGeneration
                #Collaboration #ProjetDeGroupe #Étudiant #Innovation
                #WebDevelopment
              </Clasical>
            </PersonalBranding>
            <PersonalBranding
              name="Hugo Antonini"
              role="Team Member"
              image={HugoLeMarseillais}
            >
              <Clasical>
                J'ai aprécié travailler dans le cadre de notre projet réalisé en
                collaboration avec Amélie, Mathieu, Anjara, et Nabil, j’ai
                concentré mes efforts sur la conception et l’optimisation des
                prompts.
              </Clasical>

              <Clasical>
                Mon objectif principal a été de garantir que nos instructions
                soient concises, pertinentes et stratégiquement formulées pour
                obtenir les meilleurs rendus possibles dans notre projet.
              </Clasical>
            </PersonalBranding>
          </div>
        </div>
      </BasePage>
    </>
  );
};

export default Team;
