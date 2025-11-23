"use client";
import Image from 'next/image';

const laredoMarathonBlog = () => {
  return (
    <div className="bg-rose-950 min-h-screen py-24 px-4">
      <h2
        id="laredoMarathon2025"
        className="text-3xl text-center font-bold mb-12 text-white px-4 max-w-6xl mx-auto"
      >
        From Spectator to Finisher: My Laredo Marathon Journey
      </h2>

      <div className="max-w-6xl mx-auto pb-12 space-y-16">
        {/* Intro Section */}
        <div className="bg-gradient-to-br text-white text-center max-w-4xl mx-auto space-y-4">
          <p className="text-lg">
            The <strong>Laredo Marathon</strong>—like any foot race—is a test of 
            endurance, athletic ability, and mental fortitude. About two years ago, 
            when the very first Laredo Marathon took place, I remember driving down 
            McPherson Street, one of the major roads along the course. The Laredo 
            Police Department had stopped all incoming traffic to let the runners through.
          </p>
          <p className="text-lg">
            I watched several runners glide across McPherson and thought to myself, 
            &quot;Man, those people are something else. There&apos;s no way a fat guy like me 
            could ever do that.&quot;
          </p>
          <p className="text-lg font-semibold">
            It&apos;s funny how life works—because before I knew it, after months of 
            joking with my friends about getting ridiculously fit and after a long 
            stretch of training, there I was at the starting line of the 2025 Laredo Marathon.
          </p>
        </div>

        {/* Pre-Race Nerves - Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4">
            <h3 className="text-2xl font-bold">The Days Before</h3>
            <p>
              In the days leading up to the race, I was both nervous and excited. 
              The questions kept spinning in my head: &quot;Am I ready?&quot; &quot;Can someone 
              like me really do this?&quot; &quot;What if I can&apos;t finish?&quot;
            </p>
            <p>
              What surprised me the most was the amount of support I received from 
              family, friends, and coworkers. I was genuinely moved when my friend 
              drove all the way from Austin—with his sister—to be part of my race 
              team, along with my parents.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/blogPhotos/laredo_marathon_johny_friend.jpg"
              alt="Race team support from Austin"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Race Day Arrives - Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image
              src="/blogPhotos/laredo_marathon_group.jpg"
              alt="Ready at the starting line"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-gradient-to-bl from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4 order-1 md:order-2">
            <h3 className="text-2xl font-bold">Race Day Arrives</h3>
            <p>
              When the countdown hit zero and we ran through the start gate, the 
              collective energy of everyone taking off together was indescribable. 
              Soon I found myself running down Jacaman Road—a street I usually only 
              see from behind the wheel during my daily commute.
            </p>
            <p>
              But that morning, the view was immaculate. On the left, hotels and a 
              dealership rose with the city; on the right, restaurants lined the street. 
              And in the center, stretching toward the horizon, the rising sun lit the 
              road as my fellow runners flowed ahead of me, fading gently into the 
              morning light.
            </p>
            <p className="italic">
              It looked like a painting—one that reminded me how fleeting and precious 
              moments like this are.
            </p>
          </div>
        </div>

        {/* Flow State */}
        <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-center">Finding My Rhythm</h3>
          <p className="text-lg">
            Before long, I slipped into a flow state. After nearly two years of work, 
            my body moved through every mile with the quiet certainty of something 
            forged, not found. I felt the strength in my legs and the rhythm of my 
            lungs carrying me forward.
          </p>
          <p className="text-lg">
            After mile 6, everyone settled into their paces, and I started talking to 
            other runners. I was surprised to discover runners from all over—Nebraska, 
            Oklahoma, Washington, and beyond—each with their own stories, all sharing 
            this same road with me.
          </p>
          <p className="text-lg font-semibold">
            I was genuinely happy—because all the people I met were just like me. We 
            talked about running, food, life. Everyone was friendly, and for the first 
            time in a long time, I felt like I had found my people.
          </p>
        </div>

        {/* The Wall - Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image
              src="/blogPhotos/laredo_marathon_john_friend_bear.jpg"
              alt="Support at the finish line"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-gradient-to-bl from-red-900/30 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4 order-1 md:order-2">
            <h3 className="text-2xl font-bold">Mile 11: The Wall</h3>
            <p>
              Then mile 11 arrived. And that&apos;s when I hit the wall.
            </p>
            <p>
              My quads ached, my left calf was seconds away from cramping, and my feet 
              had blisters the size of ketchup packets. I wanted to stop, but when I 
              checked my watch and saw I&apos;d been holding a 10-minute pace, I refused 
              to give up.
            </p>
            <p className="font-semibold text-xl">
              Not now. So I kept going.
            </p>
          </div>
        </div>

        {/* The Final Push - Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4">
            <h3 className="text-2xl font-bold">The Final Push</h3>
            <p>
              Eventually I could see the finish line—my friends and family waiting, 
              their faces full of suspense. I tried to speed up, but my body had 
              nothing left. A 13-minute pace was all I could manage.
            </p>
            <p>
              Still, in the back of my mind, I was determined to finish—even if I had 
              to crawl.
            </p>
            <p>
              I crossed the finish line and immediately leaned into my mom, and then 
              into my friend when he took over. I was on the edge of passing out, but 
              I reminded myself of all the training, all the miles, all the hard work. 
              My body was okay—my mind was just panicking. I took deep breaths and 
              slowly came back.
            </p>
            <p>
              My legs were completely done; standing was all they had left to give.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/blogPhotos/laredo_marathon_johny_mom.jpg"
              alt="Emotional finish line moment with mom"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* The Result */}
        <div className="bg-gradient-to-br from-green-900/30 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white max-w-4xl mx-auto space-y-4 text-center">
          <h3 className="text-3xl font-bold">Final Time: 2:26:25</h3>
          <p className="text-xl">
            And honestly? That&apos;s incredible for someone like me—a guy who used to 
            weigh over 300 pounds and never thought he could run at all, much less 
            conquer something as daunting as a half marathon.
          </p>
        </div>

        {/* Looking Forward */}
        <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-center">What&apos;s Next</h3>
          <p className="text-lg">
            Though I finished strong, the race also taught me something important: 
            I&apos;m not ready for a full marathon yet. But instead of discouraging me, 
            that realization motivated me. It showed me how close I am—and how much 
            I want it.
          </p>
          <p className="text-xl font-bold text-center">
            Next year, my friends and I are going to conquer the Laredo Marathon. 
            And this time, I&apos;ll be ready.
          </p>
        </div>

        {/* Outro */}
        <div className="text-white text-center max-w-4xl mx-auto">
          <p className="text-lg italic">
            From spectator to finisher. From doubt to determination. 
            The journey continues. 🏃‍♂️
          </p>
        </div>
      </div>
    </div>
  );
};

export default laredoMarathonBlog;