import SectionTitle from "../shared/SectionTitle";
import Question from "./Question";
const Faq = () => {
    const data=[
        {
            "id":1,
            "question":"What is GameJam ?",
            "answer":"it is a game jame play game ahgahsfgsafgsdfgdsfg"
        },
        {
            "id":2,
            "question":"What is GameJam ?",
            "answer":"it is a game jame play game ahgahsfgsafgsdfgdsfg"
        },
        {
            "id":3,
            "question":"What is the ideal number of people per team in the hackathon?",
            "answer":"it is a game jame play game ahgahsfgsafgsdfgdsfg"
        },
        {
            "id":4,
            "question":"What is the ideal number of people per team in the hackathon?",
            "answer":"it is a game jame play game ahgahsfgsafgsdfgdsfg"
        }         
    ]
    return (
        <section id="faq">
            <SectionTitle title="FAQ"/>
            <div className="flex flex-col font-PTChaser m-4 items-center justify-center md:gap-2">
                {data.map(val=>{
                    return(
                        <Question key={val.id} question={val.question} answer={val.answer} />
                    ) 
                })}
               
            </div>
        </section>
    )
}

export default Faq;