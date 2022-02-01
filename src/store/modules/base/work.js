export default {
    namespaced: true,
    state() {
        return {
            experiences: [
                {
                    company: "Deliotte",
                    work_experiences: [
                        {
                            position: "Engineer I",
                            period: "July 2021 - January 2022",
                            description: ["Worked as Product Engineer for ConvergeHealth Safety of Deloitte, a product for pharmacovigilance.", "Engaged in development of product for extraction of data from medical reports available in different formats which include PDF, XML, and JSON.", "Developed product for validation and creation of medical reports in E2B R2 and E2B R3 XML formats for the users for further reporting by user to appropriate authorities."]
                        },
                        {
                            position: "Consultant",
                            period: "June 2021 - July 2021",
                            description: ["Worked on creation of pipeline for processing the extracted data, validate incoming data and convert data to system specific format for pharmacovigilance product so that users can adjudicate.", "Assisted in POC for extraction of data from PDF files using AWS textract. It also involved performing image processing for accurate extraction of data after converting PDFs to image."]
                        },
                        {
                            position: "Analyst",
                            period: "July 2018 - June 2021",
                            description: ["Engaged with different projects spanning 3 industries which includes retail, automobile and life sciences.", "Was assigned a role of Data Engineer for Pharmacovigilance Product of Deloitte in which I was immersed in creating the following values additions", "- Assisted in creation of Data Science Software Architecture for data science module", "- Created pre-processing and post-processing pipelines", "- Achieved a memory efficiency of around 50% and improved execution time by around 70%", "Was assigned a role of Data Scientist for Value Based Contracts for Healthcare Companies", "- Mined data from insurance datasets and visualised the results", "- Wrangled big data in python matching the speed and efficiency of Pyspark", "Was assigned a role of Data Scientist for Synthetic Control Arm", "- Designed modules for missing data imputation, outlier detection.", "- Developed IPTW model for causal inference", "Was assigned a role of Data Engineer for Data Ingestion application", "- Created and maintained modules for ingestion of different types of LSHC datasets", "- Assisted for creation of automated testing application for ingested datasets", "Was assigned a role of Web Developer for development of data science application for database table relationships", "- Assisted for development of preprocessing, post-processing modules for data science application", "- Assisted for development of REST API endpoints", "Was assigned a role of UI developer for the Data Visualization tool - CogniSteward", "- Created UI components and styling for graphs", "- Integrated of R codes with Java backend", "Apart from normal project activities, other developments which were self-initiated", "- Created a python script for converting XMLs to CSV files", "- Created a Django Application for parsing US addresses", "- Analysed a gaming dataset for improving the user engagement", "- Helped in creation of python scripts for verification of correct data transfers", "- Created scripts for automatic updation of reporting sheets and renaming of images cased on mappings"]
                        }
                    ]
                }
            ],
            tools: ["Python", "Amazon Web Services", "Git", "Jenkins", "SQL", "Docker", "Kubernetes", "Vue", "Jira", "HTML/CSS", "Excel"],
            skills: ["Data Engineering", "Product Development", "Web Development", "Causal Inference", "Exploratory Data Anlysis", "Predictive Analytics"]
        }
    },
    getters: {
        experiences(state) {
            return state.experiences;
        },
        tools(state) {
            return state.tools;
        },
        skills(state) {
            return state.skills;
        }
    }
}