import React from 'react'
import BoxB from '../conference-details/boxconf';
import NavBar from '@/components/navbar';

const SecretaryGeneral = () => {
  const content = ["There’s an old saying that “a journey of a thousand miles begins with a single step” — and if you had seen me in my early days as a MUNner, that step was less a confident stride and more a nervous tiptoe. Those early moments, marked by trepidation and quirky mishaps, set me on a path of learning and growth. ",

"In a world wrought with challenges—climate change, rampant inequality, and persistent conflicts—one must ask: have we, as a global community, collectively faltered in our efforts to bring about meaningful change? Despite our many achievements, a large number of our most pressing issues remain unresolved, a stark reminder of our shared shortfall.",
"This conference shall empower you to voice opinions, deliberate on complex issues, and initiate change within your own capacities. Every debate is a call to reimagine our future and an invitation to challenge the status quo by asking tough questions and finding answers to perennial problems.",

"Over the course of the three-day conference, you will engage in spirited discussions that test your resolve and tenacity. As Ernest Hemingway once remarked, “The world breaks everyone, and afterward, some are strong at the broken places.” Each interaction is  designed not only to enhance your understanding of global issues but also to fortify your resilience. MUN is far more than just an arena for debate—it is a tool that hones our analytical thinking, sharpens our negotiation skills, and celebrates the art of diplomacy whilst making us more conscientious global citizens.", 

"In the words of Winston Churchill, “Success is not final, failure is not fatal: it is the courage to continue that counts.”",

"As your Secretary General, I fervently hope that every delegate competes fiercely—not to win, but to make a meaningful difference. In this spirit, let us remember the timeless words of Leo Tolstoy: “Everyone thinks of changing the world, but no one thinks of changing himself.” "];
  return (
    <>
    <NavBar/>
    <div className="flex justify-center">

    <div className='mt-32 w-[99.8vw] rounded-lg p-20 bg-gray-800 flex flex-col items-center justify-start mb-2'>
      <h1 className="text-4xl text-white mb-20">SECRETARY-GENERAL'S ADDRESS</h1>
      <img src="assets/chairperson.jpg" width={300} height={300} alt="" className='mb-5' />
    {
          <div
            style={{ width: "60vw", margin: "auto" }}
            className="flex flex-col items-center"
          >
            {content.map((curr, index) => (
              <>
                <p
                  key={index}
                  className="bText text-white"
                  style={{ fontSize: "19px" }}
                >
                  {curr}
                </p>
                <br key={index + 80} />
              </>
            ))}
          </div>
        }
    </div>
    </div>
    </>
  )
}

export default SecretaryGeneral