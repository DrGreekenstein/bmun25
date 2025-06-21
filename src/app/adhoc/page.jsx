import Details from '@/components/details'
import React from 'react'

const AdhocCommittee = () => {
  const imagePath = "/assets/adhoc.avif"
  const heading = "Futuristic Ad-Hoc Committee for Post-Apocalyptic Reconstruction and Survival"
  const shortName = "(AHCPARS)"
  const agenda = "Agendum 1: Rebuilding Civilization: Navigating Anarchy, Factional Domination, and Environmental Collapse Agendum 2: Establishing a Unified Framework for Governance and Control Amidst the Collapse of Global Order Freeze Date: 18th November 2080 (single delegation)"
  const quote = ["“Hope is a mistake. If you can't fix what's broken,  you'll go insane.“", "Max Rockatansky"]
  const length = [quote[0].length]

  const content = ["In a world on the brink of collapse, diplomacy has evolved into a battlefield where only the sharpest minds and most cunning individuals thrive. The ultimate challenge of adaptability, negotiation, and power is finally here,this is where survivors are shaped, where every decision means salvation or doom for nations struggling to rise from the ashes—friend or foe. If you are looking for an easy committee, take a U-turn. Yet, if you persist—continue.",

  "“Non Ducor, Duco”—I am not led, I lead. The art of persuasion, the forging and dissolution of alliances—navigating through relentless crises that demand both strategic diplomacy and decisive action is what is needed here.Those who depend solely on rhetoric shall falter, while those who can think, react, and lead under pressure will influence the course of the future.",

  "A painting smeared with red—an abyss unto the sky. The world remains inebriated—nations that once held onto their pride have wandered into this abyss—an apocalypse that has taken the place of leadership, leaving the world where it stands today, stripped of pity and mercy, its dilated eyes void of compassion.",

  "From advanced societies to desert maniacs, the world has witnessed it all. Its people have forgotten what it means to enjoy survival as a right. Raids. Piracy. Oppression. A bloody mess, a cutthroat battle for resources, and a long-lasting plea for order. There is nothing to hold onto but yourselves.",

  "Nations are but memories, borders meaningless, yet in this chaos, anomalies have emerged—pseudo-factions driven by nothing but ambition and despair. Pandora’s box holds a light, flickering amidst its unholy atrocities. And the fate of this light is yours to decide! This is the final chance to rise—not as fickle-minded nations, but as those who have survived, marked by the ultimate burden—to rebuild and reconstruct. This committee is your battlefield, the crucible of your wildest dreams, and it is upon you to decide its fate. ",

  "In every direction, danger lurks. Just as Hecate provides paths to choose from, you are given the power deemed of a regional god—every choice you make either strengthens your faction or breaks it further. This is your committee, a volatile battleground of fierce rivalries, cunning strategies, and fragile alliances. Every decision will determine whether you control the chaos—or succumb to it.",

  "Welcome to the brink of humanity's survival—",

  "Welcome to the ADHOC Committee for Post-Apocalyptic Reconstruction and Survival, 2080"
  ]

  const chairpersonAddress = ["Ambition and over weaning pride clenches our minds as our eyes remain fixated to one thing - a canvas of placards and an insatiable appetite to establish a mark in history. Steps are but trepidations and diplomacy a cantankerous mess. From moments of fervorous debate to teetering instances of negotiations, we have all sought the ultimate challenge that would propel us beyond mere speeches and paperwork - a panache of wit, finesse and resilience. This is that challenge. The world we knew is an epoch, whose dire consequences now call for revisit and reconstruction. This invitation is not just for survival but for the penultimate authority to shape what emerges thereafter and forever more. This is not a committee for the faint-hearted but for those who can command the room in a paragon of rhetoric, shrewdness, and dictate the battlefield with decisive action. Here, the lines between perseverance and triumph blur, and only those who can assure us of both will taste fine glory. We expect nothing less than brilliance - because in this committee, only the best can hope to shape the future. Impress us.",

  "Aryaman Saraogi, a perfect mix of enthusiasm and hard work, lives by the motto of sleeping in class and working at night. Half the English section of the school chronicle is filled with his poems, and when not lost in verses, he’s outside the school gate, silencing honkers with an intimidating stare. Always in a perfectly ironed Van Heusen suit, he thrives on intimidating delegates with his unmatched knowledge of law—though cracking CLAT would be easier if he actually studied. A football fanatic, he spends his free time reliving the golden days of Real Madrid and East Bengal. If you need a Yemen debate or an Ali Zafar appreciation session, he’s your guy. Addicted to Hans Zimmer and Interstellar, he somehow knows more about space than science students. Despite preparing two months in advance, he always calls himself “underprepared” but dominates MUNs with flawless paperwork and speeches. Just don’t use AI in his committee—he has GPTZero+ purchased. Whether debating, reminiscing, or enforcing silence, Aryaman ensures every delegate leaves with unforgettable memories.", 

  "Affectionately known as the Peralta of our batch, Dhrishit Dasgupta, your chairperson, is famous for his sarcastic humor, perfectionist streak, and dangerously effective lobbying. A Madrid fan who still shows up unfazed after a 2:30 AM loss, he’s a fierce debater, a Hollywood buff obsessed with Brad Pitt, and a firm believer that Brooklyn 99 is the greatest sitcom ever made. His co-chair and he are the best of friends—until Mohun Bagan vs. East Bengal enters the conversation (seriously, don’t bring it up). A true clutch guy, Dhrishit has tried nearly every activity under the sun, reflected in his ever-changing career choices and fearless approach to the toughest MUN committees. With a sweet tooth for gajar ka halwa and brownies, he balances his love for food with an equally strong passion for the guitar. Whether hypnotizing delegates, lobbying his parents for another MUN, or delivering razor-sharp comebacks, he proves all you need is an espresso, a CLAT handbook, a Prime membership, and a guitar in hand"]

  const conclusion = ["Until July,",
  "Aryaman Saraogi and Dhrishit Dasgupta,",
  "Chairpersons, the GOATs of MUN,",
  "The Futuristic Ad-Hoc Committee for Post-Apocalyptic Reconstruction and Survival,",
  "Bosco Model United Nations 2025."
  ]

  return (
    <Details image={imagePath} shortName={shortName} heading={heading} agenda={agenda} quote={quote} length={length} content={content} chairpersonAddress={chairpersonAddress} conclusion={conclusion}/>
  )
}

export default AdhocCommittee