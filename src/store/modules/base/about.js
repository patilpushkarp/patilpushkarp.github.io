export default {
    namespaced: true,
    state(){
        return {
            age: 0,
            intro: "STUDENT OF MANAGMENT",
            aboutBody: ["I'm a professional with experience in developing data-driven services and products for more than 3 years. I worked on projects spanning industries which include retail, automotive, life sciences and healthcare."," Having explored the field of software engineering and technology, I am looking forward to peek into the world of management. I am interested to explore the field of strategic design and management and currently, I am pursuing my Masters in Business administration specialized in Digital Enterprise Management from Indian Institute of Management, Udaipur."],
            aboutSubBody: ["I am constatntly seeking to learn more about fields such as agriculture, energy, public policy, retail and finance to expand my viewpoints about the nature and organization management of companies operating in these fields.", "Moreover, I am not rigid to these above-mentioned fields but open to hear any word you have worth sharing. Helps will always be appreciated."],
            studies: [
                {
                    institute: "Veermata Jijabai Technological Institute",
                    study: "Bachelor of Technology (B.Tech)",
                    score_type: "CGPA",
                    score: "7.84",
                    description: "I pursued my bachelors in Electronics Engineering. My favorite subjects were Engineering Drawing, Statistics and Probability, Numerical Techniques, Digital Circuits, Network Theory, Artificial Neural Networks and Fuzzy Logic, and Energy Conservation and Management. I picked coding while supporting my hardware projects with software. At that time I did not find any vallue addition in participating in events, instead was focused more on reading articles about latest technologies and trends."
                },
                {
                    institute: "Nowrosjee Wadia College",
                    study: "12th",
                    score_type: "Percentage",
                    score: "82.5",
                    description: "I completed my class 12th in Pure Science braches which, apart from English, Physics, Chemistry and Mathematics, include Hindi and Geology. I was amongst the top 1 percentile in the state and eligible for scholarshihp under INSPIRE programme (a flagship programme of Government of India)."
                },
                {
                    institute: "Global Indian International School",
                    study: "10th",
                    score_type: "Percentage",
                    score: "92.4",
                    description: "I was just another kid in class 10th. I was active in my favorite sport and represented 'West Zone' in the zonal level skating competition conducted by CBSE board. I was even a fine goal-keeper. Made my first electronics project in this grade."
                }
            ]
        }
    },
    mutations:{
        computeAge(state) {
            let currentDate = Date.now();
            let dateOfBirth = new Date(1995, 4, 11);
      
            var seconds = (currentDate - dateOfBirth) / 1000,
              minutes = seconds / 60,
              hours = minutes / 60,
              days = hours / 24,
              years = Math.floor(days / 365);
      
            state.age = years;
          },
    },
    getters:{
        intro(state){
            return state.intro;
        },
        age(state){
            return state.age;
        },
        aboutBody(state){
            return state.aboutBody;
        },
        aboutSubBody(state){
            return state.aboutSubBody;
        },
        studies(state){
            return state.studies;
        }
    }
}