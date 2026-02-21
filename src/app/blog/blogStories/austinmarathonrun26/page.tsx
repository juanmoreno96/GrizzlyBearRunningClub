"use client";
import Image from 'next/image';

const austinMarathonRun26 = () => {
  return (
    <div className="bg-rose-950 min-h-screen py-24 px-4">
      <h2
        id="madeOfIron"
        className="text-3xl text-center font-bold mb-12 text-white px-4 max-w-6xl mx-auto"
      >
        Made of Iron: My Austin Marathon Journey
      </h2>

      <div className="max-w-6xl mx-auto pb-12 space-y-16">
        {/* Act I - The Car Window */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br text-white text-center space-y-4">
            <h3 className="text-2xl font-bold">Act I — The Car Window</h3>
            <p className="text-lg">
              I have been overweight for as long as I can remember. For most of my life, I believed that was just who I was, the &quot;big&quot; kid.
              The one who tried but was not born with the gift of athleticism. The one who loved to run but didn&apos;t look like he belonged in them.
            </p>
            <p className="text-lg">
              Two years ago, I would have laughed if someone told me I&apos;d sign up for a marathon — let alone finish one.
            </p>
            <p className="text-lg">
              I remember the moment clearly. I was in the car with my ex-fiancé, Eva, heading back to our apartment with takeout. 
              Traffic stopped suddenly on McPherson Road. Then we saw them. Runners. Dozens of them passed in front of our car.
            </p>
            <p className="text-lg font-semibold text-rose-300">
              And for a brief moment, I imagined myself out there. But just as quickly, reality rushed back in. 
              I grabbed the takeout. And I stayed the same.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/blogPhotos/austinMarathon26/austinMarathon_johny_looking_at_map.jpg"
              alt="Johny looking at the Austin Marathon map"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Act II - The Decision */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image
              src="/blogPhotos/austinMarathon26/austinMarathon_johny_pointing_at_map.jpg"
              alt="Johny pointing at the marathon route"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-gradient-to-bl from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4 order-1 md:order-2">
            <h3 className="text-2xl font-bold">Act II — The Decision</h3>
            <p className="text-lg">
              Time moved on. My engagement ended after infidelity, and I tried to piece my life back together. 
              Eventually, I met someone new, AH. And when you let someone past your walls, their words tend to have a really big impact.
            </p>
            <p className="text-lg">
              When I asked her out, she told me she never really meant yes. She said my body disgusted her. 
              She said people like me didn&apos;t deserve to be loved.
            </p>
            <p className="text-lg">
              I wish I could say I brushed it off. I didn&apos;t. But what hurt most was that I believed her. 
              Because somewhere deep down, I had always feared that it was true.
            </p>
            <p className="text-lg font-semibold">
              But eventually, something inside me shifted. When we hit our lowest point, we are open to the greatest change.
            </p>
          </div>
        </div>

        {/* Act III - The Training */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4">
            <h3 className="text-2xl font-bold">Act III — The Training</h3>
            <p className="text-lg">
              At first, I just tried to walk longer. Walk faster. Sweat more. Then my friend Henry told me to sign up for the San Antonio Rock &apos;n&apos; Roll 5K. 
              I couldn&apos;t even run. And I signed up anyway.
            </p>
            <p className="text-lg">
              One day during training, I ran a full 5K in about 50 minutes. It wasn&apos;t fast. But it was mine. 
              And for the first time, I thought, &quot;Maybe a man like me can run.&quot;
            </p>
            <p className="text-lg">
              Something funny started happening. I began enjoying it. The rhythm. The solitude. The discipline. 
              Because somewhere along the way, running stopped being punishment. It became love.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/blogPhotos/austinMarathon26/austinMarathon_johny_running.jpg"
              alt="Johny running during the marathon"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Act IV - Letting Go */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image
              src="/blogPhotos/austinMarathon26/austinMarathon_team_photo_with_medals.jpg"
              alt="Team photo with medals"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-gradient-to-bl from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4 order-1 md:order-2">
            <h3 className="text-2xl font-bold">Act IV — Letting Go</h3>
            <p className="text-lg">
              I started getting faster. I ran half-marathon distances. Eventually, I ran the Laredo Half Marathon and PR&apos;d. 
              Then my knee gave out. The injury hit hard—physically and emotionally.
            </p>
            <p className="text-lg">
              But my friend Bear asked, &quot;Are we still doing Austin?&quot; I hadn&apos;t fully recovered. The night before he asked me, 
              I had a dream I was running it. I took it as a sign. I said yes without hesitation.
            </p>
            <p className="text-lg">
              There were people who doubted me. But there were those who always believed. They told me something I won&apos;t forget: 
              &quot;People doubt you because they&apos;ve only seen you at your weakest. We&apos;ve seen your work.&quot;
            </p>
            <p className="text-lg font-semibold text-rose-300">
              That changed something. I stopped listening to doubt.
            </p>
          </div>
        </div>

        {/* Act V - The Night Before */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4">
            <h3 className="text-2xl font-bold">Act V — The Night Before</h3>
            <p className="text-lg">
              Before I knew it, marathon weekend arrived. Two years earlier, I was the man in the car watching runners. 
              Now I was pinning on a bib.
            </p>
            <p className="text-lg">
              I wasn&apos;t the fat kid who quit. I wasn&apos;t the man who believed he didn&apos;t deserve love. 
              I wasn&apos;t the person staring out the window wishing.
            </p>
            <p className="text-lg font-semibold text-rose-300">
              I was the runner. And for the first time in my life, I wasn&apos;t imagining belonging. I had earned it.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/blogPhotos/austinMarathon26/austinMarathon_johny_holding_medals.JPG"
              alt="Johny holding his medals"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Act VI - The Longest Day */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image
              src="/blogPhotos/austinMarathon26/austinMarathon_running_crowd.JPG"
              alt="Running crowd at Austin Marathon"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-gradient-to-bl from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4 order-1 md:order-2">
            <h3 className="text-2xl font-bold">Act VI — The Longest Day</h3>
            <p className="text-lg">
              The marathon day arrived cold and electric. I arrived at the starting line and somehow ended up in Corral D—the slow corral. 
              The &quot;you&apos;re just happy to be here&quot; corral.
            </p>
            <p className="text-lg">
              The first two miles were pure adrenaline. From there until mile 12, it was all training. No struggle. No panic. 
              Just rhythm. Breath. Footstrike.
            </p>
            <p className="text-lg">
              But at mile 18, the wall arrived. It didn&apos;t tap me gently. It hit me hard. For a moment—a dangerous, fragile moment—I considered quitting.
            </p>
            <p className="text-lg font-semibold">
              And then memory after memory flooded in. If I stopped now, that old version of me would be right. So I made a decision: Dig. Deep.
            </p>
          </div>
        </div>

        {/* The Final Push */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4">
            <h3 className="text-2xl font-bold">The Final Push</h3>
            <p className="text-lg">
              The pain was excruciating. My pace dropped from 13 minutes to 18. At mile 22 I realized something terrifying—I might not finish in time.
            </p>
            <p className="text-lg">
              And then, like a character planted by fate, there was a man offering vodka shots on the side of the road. 
              For one mile, I unleashed everything. From 18-minute pace to 9-minute pace. I felt every rep in the gym. 
              Every early morning. Every sacrifice. I felt strong. Powerful.
            </p>
            <p className="text-lg">
              But I remembered Adriana&apos;s words. I had promised not to destroy myself chasing ego. So after that mile, I eased back. Controlled. Intentional.
            </p>
            <p className="text-lg font-semibold text-rose-300">
              And when I crossed that finish line, my body was wrecked. But something else stood taller than it ever had before.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/blogPhotos/austinMarathon26/austinMarathon_capitol_and_johny.JPG"
              alt="Capitol and Johny at finish"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Celebration and Reflection */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image
              src="/blogPhotos/austinMarathon26/austinMarathon_medals_with_bbq.JPG"
              alt="Medals with BBQ"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-gradient-to-bl from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4 order-1 md:order-2">
            <h3 className="text-2xl font-bold">The Declaration</h3>
            <p className="text-lg">
              For my entire life, I believed endurance belonged to other people. To the naturally gifted. To the thin. 
              To the athletic. To the lucky.
            </p>
            <p className="text-lg">
              But that day, in Austin, I proved something to myself that no one can ever take away: 
              I am not the kid watching runners through a car window anymore. I am the runner.
            </p>
            <p className="text-lg font-semibold text-rose-300">
              And finishing that marathon wasn&apos;t just about 26.2 miles. It was a declaration.
            </p>
          </div>
        </div>

        {/* Celebration Moments */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4">
            <h3 className="text-2xl font-bold">Victory Moments</h3>
            <p className="text-lg">
              The celebration that followed was surreal. Surrounded by loved ones, holding medals, feeling the weight of accomplishment. 
              Every sacrifice, every early morning, every moment of doubt—it all led to this.
            </p>
            <p className="text-lg font-semibold">
              This is what transformation looks like. Not perfection. Not ease. But persistence. Discipline. 
              And the unwavering belief that you are capable of more than you ever imagined.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/blogPhotos/austinMarathon26/austinMarathon_johny_and_buckies.JPG"
              alt="Johny and friends celebrating"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white max-w-4xl mx-auto space-y-4 text-center">
          <h3 className="text-3xl font-bold text-rose-300">I am made of iron.</h3>
          <p className="text-xl">
            And iron, once forged in fire, does not break.
          </p>
        </div>

        {/* Outro */}
        <div className="text-white text-center max-w-4xl mx-auto">
          <p className="text-lg italic">
            This is my story. This is my Austin Marathon. This is my transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default austinMarathonRun26;
