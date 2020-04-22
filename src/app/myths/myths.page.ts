import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-myths",
  templateUrl: "./myths.page.html",
  styleUrls: ["./myths.page.scss"],
})
export class MythsPage implements OnInit {
  /**
   * The data structure that will be used for supplying the accordion content
   * @public
   * @property technologies
   * @type {Array}
   */
  public technologies: Array<{
    question: string;
    answer: string;
  }> = [
    {
      question:
        "Consuming 'Bojho', Garlic or Turmeric will prevent the Corona Virus infection.",
      answer:
        "It’s a Myth. Eating Bojho, Garlic and Turmeric is good for health. But until now, no evidence has been found that consuming these herbs and spices can prevent the Corona Virus infection.",
    },
    {
      question:
        "There is no sanitizer in the shop and now I cannot protect myself from coronavirus infection!",
      answer:
        "It’s a Myth. There's no need to panic if there are no hand sanitizers. What's more important is that you frequently wash your hands with soap and clean water as this reduces the risk of coronavirus infection. Hands should be thoroughly washed, especially between the fingers, the palm, around the thumb, the front and back of the hands, and also under the nails.",
    },
    {
      question: "Smoking increases and doesn’t prevent coronavirus infection?",
      answer:
        "It’s a Fact. Smoking does not prevent coronavirus infection but increases the risk of it. Smoking is harmful to health. Each year, some 100,000 people die due to health problems caused by smoking cigarettes. People with underlying heart and other health problems are more prone to the infection if they have a habit of smoking.",
    },
    {
      question:
        "Rinsing the mouth with mouthwash can prevent the coronavirus infection.",
      answer:
        "It’s a Myth. There is no evidence to date that coronavirus infection can be prevented by the use of mouthwashes. Although some company's use of mouthwashes will temporarily eradicate some of the viruses that are inside the mouth, it cannot protect against the COVID-19 infection.",
    },
    {
      question:
        "The vaccine against pneumonia protect us from the coronavirus infection.",
      answer:
        "It’s a Myth. Vaccines against pneumonia such as 'pneumococcal vaccine' and 'hemophilus influenza' type B vaccines do not protect against the coronavirus. Since it is a new and different virus, it requires a different type of vaccine. Research is being done to develop the vaccine against the coronavirus, but has not yet been discovered. Although vaccines against pneumonia are not useful for the prevention of coronavirus, these vaccines can be used to prevent respiratory problems for health.",
    },
    {
      question: "Warm weather will stop the outbreak of COVID-19.",
      answer:
        "It is a Myth. It is not known whether the spread of COVID-19 will decrease when weather becomes warmer.  There is much more to learn about the transmissibility, severity, and other features associated with COVID-19 and investigations are ongoing.",
    },
    {
      question:
        "Taking a hot bath will not prevent the new coronavirus disease",
      answer:
        "It’s a Fact. Taking a hot bath will not prevent you from catching COVID-19. Your normal body temperature remains around 36.5*C to 37*C, regardless of the temperature of your bath or shower. Actually, taking a hot bath with extremely hot water can be harmful, as it can burn you.</p><p>The best way to protect yourself against COVID-19 is by frequently cleaning your hands.",
    },
    {
      question:
        "The new coronavirus cannot be transmitted through mosquito bites.",
      answer:
        "It’s a Fact. To date there has been no information nor evidence to suggest that the new coronavirus could be transmitted by mosquitoes. The new coronavirus is a respiratory virus which spreads primarily through droplets generated when an infected person coughs or sneezes, or through droplets of saliva or discharge from the nose. To protect yourself, clean your hands frequently with an alcohol-based hand rub or wash them with soap and water. Also, avoid close contact with anyone who is coughing and sneezing.",
    },
    {
      question:
        "Thermal scanners can detect people infected with the new coronavirus.",
      answer:
        "It’s a Myth as they cannot detect people infected with the new coronavirus. Thermal scanners are effective in detecting people who have developed a fever (i.e.have a higher than normal body temperature) because of infection with the new coronavirus. However, they cannot detect people who are infected but are not yet sick with fever. This is because it takes between 2 and 10 days before people who are infected become sick.",
    },
    {
      question:
        "Products made in China or have been delivered from China can spread the virus.",
      answer:
        "It’s a Myth. The virus cannot survive that long and hence cannot be spread from the products made in China.",
    },
    {
      question:
        "The virus can die if we consume alcohol or rub the whole body with an alcohol rub.",
      answer:
        "It’s a myth. Drinking alcohol or rubbing chlorine or alcohol rub will only cause skin allergies and drinking habit.",
    },
    {
      question:
        "Drinking water and massaging the body with mustard oil can kill the virus.",
      answer:
        "It’s a myth. However, drinking hot water or gargling with warm salt water can prevent the virus from traveling from your throat to the lungs. But, massaging with oil won’t kill the virus or prevent the infection.",
    },
  ];

  constructor() {}

  /**
   * Captures and console logs the value emitted from the user depressing the accordion component's <ion-button> element
   * @public
   * @method captureName
   * @param {any}		event 				The captured event
   * @returns {none}
   */
  public captureName(event: any): void {
    console.log(`Captured question by event value: ${event}`);
  }
  ngOnInit() {}
}
