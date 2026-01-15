"use client";
import Image from 'next/image';

const austinMarathonBlog = () => {
  return (
    <div className="bg-rose-950 min-h-screen py-24 px-4">
      <h2
        id="endOfTheRoad"
        className="text-3xl text-center font-bold mb-12 text-white px-4 max-w-6xl mx-auto"
      >
        End of the Road: GBRC 2025-26 Season Finale
      </h2>

      <div className="max-w-6xl mx-auto pb-12 space-y-16">
        {/* Intro Section with Image */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br text-white text-center space-y-4">
            <p className="text-lg">
              As we approach the end of the road for the Grizzly Bear Running Club&apos;s 2025-26 racing season, 
              we&apos;re reflecting on an incredible inaugural year. As a team, we came together to accomplish 
              every goal we set. We grew and learned what it truly means to be part of a running team throughout the year.
            </p>
            <p className="text-lg">
              What started as a dream has become a reality: <strong>five races completed together</strong>, with countless 
              miles logged, early morning training sessions conquered, and friendships forged on the pavement. Some teammates 
              achieved monumental goals, like completing the Laredo Half Marathon, while others celebrated the sheer number 
              of races they conquered this season.
            </p>
            <p className="text-lg font-semibold">
              Every finish line crossed was a victory, whether it was your first 5K or your fifth race of the season.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/blogPhotos/gbrc_austin_blog.png"
              alt="GBRC team at Austin Marathon"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* The Journey Section with Image */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image
              src="/blogPhotos/laredo_marathon_group.jpg"
              alt="GBRC team at Laredo Marathon"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-gradient-to-bl from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4 order-1 md:order-2">
            <h3 className="text-2xl font-bold">The Toll of Success</h3>
            <p className="text-lg">
              I&apos;m not going to lie to you, these past couple of races and the amount of events we participated in 
              did take a toll on our team. The back-to-back race weekends, the long training runs, the early alarms—it all added up.
            </p>
            <p className="text-lg">
              One disappointment we faced was missing the Laredo Santa Run 5K. We decided as a team to rest and spend 
              time with family instead, and honestly? It was the right call. But we&apos;re back and well-rested! Throughout 
              the end of December and into January, we spent most of our time recovering, recharging, and slowly getting 
              back into the groove of things.
            </p>
          </div>
        </div>

        {/* Austin Marathon Section with Group Photo */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4">
            <h3 className="text-2xl font-bold">One Final Chapter: Austin Marathon</h3>
            <p className="text-lg">
              But we&apos;re not done yet—the end of the road is near, but we have one final chapter to write: 
              race number six, the <strong>Austin Marathon</strong>.
            </p>
            <p className="text-lg">
              Now we&apos;re very excited to participate in the Austin Marathon—our sixth and final race of the season. 
              Some of us will attempt the full 26.2 miles while others will tackle the 5K, and the course is absolutely spectacular. 
              The Austin Marathon takes place in beautiful downtown Austin, starting and ending at the Capitol and winding through 
              the city over all kinds of challenges—rolling hills, scenic bridges, and enthusiastic crowds cheering us on every 
              step of the way.
            </p>
            <p className="text-lg font-semibold">
              And so we continue to train. To be honest, I feel the excitement, fear, and all kinds of emotions radiating 
              from the team—but this is what we&apos;ve been training for. This is what we&apos;ve been building toward.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/blogPhotos/zombieRunGroupRun.jpeg"
              alt="GBRC team training together"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* The Beginning Section with Group Photo */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4">
            <h3 className="text-2xl font-bold">From Three Friends to a Community</h3>
            <p className="text-lg">
              This event is what started our whole journey of the GBRC 2025-26 running tour, and we can&apos;t wait 
              to cross that finish line one more time together.
            </p>
            <p className="text-lg">
              When we started this running club, we didn&apos;t believe we would make it this far. It all started as 
              jokes between three friends finding a new love for running and hiking, and now we are here—six races 
              deep with a community we&apos;re proud to call our own.
            </p>
            <p className="text-lg font-semibold text-rose-300">
              We&apos;d like to thank the team for being part of all our events, training runs, and social gatherings. 
              The dedication, the laughs, the encouragement when legs were tired and spirits were low—that&apos;s what made this season special.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/blogPhotos/dia_del_lost_muerto_all_group.jpg"
              alt="GBRC community at Dia de Muertos"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Gratitude Section */}
        <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-center">To Our Supporters</h3>
          <p className="text-lg">
            We would also like to thank our supporters and everyone who cheered us on along the way. 
            Your enthusiasm, your presence at our races, and your belief in what we&apos;re building—it all means everything.
          </p>
          <p className="text-xl font-bold text-center text-rose-300">
            Thank y&apos;all so much.
          </p>
        </div>

        {/* Outro */}
        <div className="text-white text-center max-w-4xl mx-auto">
          <p className="text-lg italic">
            As we approach the finish line of this incredible season, we know one thing for certain: 
            this is just the beginning. 🏃‍♂️
          </p>
        </div>
      </div>
    </div>
  );
};

export default austinMarathonBlog;