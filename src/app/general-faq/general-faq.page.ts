import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-general-faq",
  templateUrl: "./general-faq.page.html",
  styleUrls: ["./general-faq.page.scss"],
})
export class GeneralFAQPage implements OnInit {
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
      question: "What is COVID-19?",
      answer:
        "COVID-19 is an infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019.",
    },
    {
      question: "What are the symptoms of COVID-19?",
      answer:
        "The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don’t develop any symptoms and don't feel unwell.",
    },
    {
      question: "How does the COVID-19 disease transmit from person to person?",
      answer:
        "The disease can spread from person to person if they breathe in the small droplets containing the virus when that person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth.",
    },
    {
      question:
        "Can the virus that causes COVID-19 be transmitted through the air?",
      answer:
        "Studies to date suggest that the virus that causes COVID-19 is mainly transmitted through contact with respiratory droplets rather than through the air.",
    },
    {
      question: "Can COVID-19 be caught from a person who has no symptoms?",
      answer:
        "It is possible to catch COVID-19 from someone who has, for example, just a mild cough and does not feel ill.",
    },
    {
      question:
        "What can I do to protect myself and prevent the spread of disease?",
      answer:
        "You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions like Regularly and thoroughly clean your hands for at least 20 seconds with an alcohol-based hand rub or wash them with soap and water. Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing. Avoid touching eyes, nose and mouth. Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick. Cover your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately. Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.",
    },
    {
      question:
        "Are antibiotics effective in preventing or treating the COVID-19?",
      answer:
        "No. Antibiotics do not work against viruses, they only work on bacterial infections.",
    },
    {
      question: "Are there any medicines to cure COVID-19?",
      answer:
        "There is no evidence that current medicine can prevent or cure the disease. There are several ongoing clinical trials that include both western and traditional medicines.",
    },
    {
      question: "Will wearing a mask protect me from the COVID-19?",
      answer:
        "Not really. Only wear a mask if you are ill with COVID-19 symptoms (especially coughing) or looking after someone who may have COVID-19. The most effective ways to protect yourself and others against COVID-19 are to frequently clean your hands, cover your cough with the bend of elbow or tissue and maintain a distance of at least 1 meter (3 feet) from people.",
    },
    {
      question:
        "Can humans become infected with the COVID-19 from an animal source?",
      answer:
        "It’s possible. Handle raw meat, milk or animal organs with care to avoid contamination of uncooked foods and avoid consuming raw or undercooked animal products.",
    },
    {
      question: "Can I catch COVID-19 from my pet?",
      answer:
        "There is no evidence that a dog, cat or any pet can transmit COVID-19.",
    },
    {
      question: "How long does the virus survive on surfaces?",
      answer:
        "Studies suggest that coronaviruses (including preliminary information on the COVID-19 virus) may persist on surfaces for a few hours or up to several days.",
    },
    {
      question: "Will warm weather stop the outbreak?",
      answer:
        "At this time, it is not known whether the spread of COVID-19 will decrease when weather becomes warmer.",
    },
    {
      question:
        "How can pregnant women protect themselves from getting COVID-19?",
      answer:
        "Pregnant women should do the same things as the general public to avoid infection. You can help stop the spread of COVID-19 by taking actions like covering your cough (using your elbow is a good technique). Avoid people who are sick. Clean your hands often using soap and water or alcohol-based hand sanitizer.",
    },
    {
      question:
        "Can COVID-19 be passed from a pregnant woman to the fetus or newborn?",
      answer:
        "We still do not know if a pregnant woman with COVID-19 can pass the virus that causes COVID-19 to her fetus or baby during pregnancy or delivery.",
    },
    {
      question: "Can the COVID-19 virus spread through drinking water?",
      answer:
        "The COVID-19 virus has not been detected in drinking water. Conventional water treatment methods that use filtration and disinfection, such as those in most municipal drinking water systems, should remove or inactivate the virus that causes COVID-19.",
    },
    {
      question: "Is the COVID-19 virus found in feces?",
      answer:
        "The virus that causes COVID-19 has been detected in the feces of some patients diagnosed with COVID-19. The amount of virus released from the body (shed) in stool, how long the virus is shed, and whether the virus in the stool is infectious are not known. The risk of transmission of COVID-19 from the feces of an infected person is also unknown.",
    },
    {
      question:
        "Is Teku-based hospital, Sukraraj Tropical and Infectious Disease Hospital, the only hospital allocated for testing and treatment of COVID-19 in Nepal?",
      answer:
        "No. The Government of Nepal has allocated two hospitals, STIDH(Teku) hospital, and Patan Hospital, where you can get tested for Covid-19 infection. Teku hospital is, however, given the first priority since it specializes in dealing with all kinds of infectious diseases like COVID-19. They work closely with the National Public Health Laboratory which is also situated in Teku that performs the confirmatory testing for COVID-19. Do remember that you do not have to go to Teku hospital to take the swab specimen as other hospitals can take a specimen and send it to NPHL.For the treatment of COVID-19, all hospitals can manage beds, ICUs and ventilators for severely infected patients. Since there is no evidence that current medicine can prevent or cure the disease, each case can be managed by all the hospitals, giving antiviral and antibacterial therapy.",
    },
    {
      question:
        "With how many testing kits is the Teku hospital equipped currently?",
      answer:
        "The last news suggests that the Teku hospital is equipped with about 1500 test kits. 522 tests were performed until yesterday.",
    },
    {
      question:
        "Is the swab testing carried out in Nepal or sent abroad? What is the medium of transportation of the specimens?",
      answer:
        "Swab testing is done in Nepal. In some cases, the samples of the positive cases are transported to a WHO reference lab in the region for re-confirmation. The doctors are, however, immediately notified when a case shows a positive result. The specimens as they are highly contagious are transported using the Viral Transport Medium (VTM). In simple words, it as a tube with rubber seals and has chemicals inside it to prevent the specimen from disintegrating. It is generally Tripple packed in virus transport package. If the sample can be taken to the laboratory within four days, they may be kept at +4 °C and frozen at -70 °C on arrival if they are to be stored. Otherwise, they should be frozen at or below -70 °C until they can be transported to the laboratory via air shipping.",
    },
    {
      question:
        "If the test sample is transported to the laboratory outside Nepal, how long does it take for the reports to arrive in Nepal?",
      answer:
        "It depends on cases but it is not very quick. It generally takes two hours or so to perform the test and can generally take a week to get the final result. The positive cases are reported to doctors immediately so that you are immediately transferred to the isolation room and treated accordingly.",
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
