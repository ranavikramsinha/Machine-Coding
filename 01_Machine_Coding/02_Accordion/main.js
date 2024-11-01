const data = [
  {
    id: "1",
    question: "What is an accordion component in web design?",
    answer:
      "An accordion component is a UI element that allows users to expand and collapse sections of content, facilitating a more organized presentation of information.",
  },
  {
    id: "2",
    question: "What are common use cases for accordions?",
    answer:
      "Common use cases for accordions include FAQs, content management systems, and product features, where users benefit from easily navigating through layered information.",
  },
  {
    id: "3",
    question: "What genres commonly feature the accordion instrument?",
    answer:
      "The accordion is commonly featured in genres such as folk, polka, jazz, and classical music, celebrated for its rich, expressive sound.",
  },
  {
    id: "4",
    question:
      "Are there any accessibility considerations for accordion components?",
    answer:
      "Yes, when implementing accordion components, it's important to ensure they are keyboard-navigable and compatible with screen readers to enhance accessibility for all users.",
  },
  {
    id: "5",
    question: "What design principles should guide accordion implementation?",
    answer:
      "Design principles for accordion implementation include clarity, consistency, and responsiveness, ensuring that the component is intuitive and adapts well to different screen sizes.",
  },
  {
    id: "6",
    question: "How can I implement an accordion in a mobile app?",
    answer:
      "To implement an accordion in a mobile app, you can use framework-specific components (like React Native's Accordion) or create a custom component with touch gestures for expanding and collapsing sections.",
  },
  {
    id: "7",
    question: "What maintenance is required for accordion components?",
    answer:
      "Regular maintenance includes updating content for relevance, testing functionality across devices, and ensuring compatibility with other components in your application.",
  },
  {
    id: "8",
    question: "What is the history of the accordion as a musical instrument?",
    answer:
      "The accordion originated in the early 19th century, evolving from earlier free reed instruments. It gained popularity across Europe and has since become integral to various musical traditions worldwide.",
  },
];

const accordionWrapper = document.querySelector(".accordion");

function createAccordionData(){
    accordionWrapper.innerHTML = data.map(dataItem => `
        <div class = "accordion_item">
        <div class = "accordion_title">
        <h3>${dataItem.question}</h3>
        <i class = "fa-solid fa-arrow-down"></i>
        </div>
        <div class = "accordion_content">
        <p>${dataItem.answer}</p>
        </div>
        </div>
        `).join(" ");
}

createAccordionData();

const getAccordionTitles = document.querySelectorAll(".accordion_title")

console.log(getAccordionTitles);

getAccordionTitles.forEach(currentItem => {
    currentItem.addEventListener('click', (event) => {
        if(currentItem.classList.contains("active")){
            currentItem.classList.remove("active");
        }
        else{
            let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");

            //* for opening one and closing every other accordion
            getAlreadyAddedActiveClasses.forEach(currentActiveItem => {
                currentActiveItem.classList.remove("active");
            })

            currentItem.classList.add("active");
        }
    })
})
