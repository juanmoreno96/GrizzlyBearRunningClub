"use client";
import Image from 'next/image';

const diaDeMuertosBlog = () => {
  return (
    <div className="bg-rose-950 min-h-screen py-24 px-4">
      <h2
        id="diaDeMuertos2024"
        className="text-3xl text-center font-bold mb-12 text-white px-4 max-w-6xl mx-auto"
      >
        What a Night! Our Día de los Muertos 5K Glow Run
      </h2>

      <div className="max-w-6xl mx-auto pb-12 space-y-16">
        {/* Intro Section */}
        <div className="bg-gradient-to-br text-white text-center max-w-4xl mx-auto space-y-4">
          <p className="text-lg">
            This past weekend was truly special for the{" "}
            <strong>Grizzly Bear Running Club</strong>. We participated in the{" "}
            <strong>&quot;Día de los Muertos 5K Glow Run&quot;</strong>, and it turned
            out to be one of the most memorable races we&apos;ve experienced as a
            team.
          </p>
          <p className="text-lg">
            The evening started with a beautiful festival featuring a Catrinas
            contest and live mariachi music. The whole celebration was bursting
            with color—participants wore incredible costumes with intricate face
            paintings that captured the spirit of Día de los Muertos perfectly.
            It set such a meaningful tone for the race ahead.
          </p>
        </div>

        {/* Cultural Experience - Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4">
            <h3 className="text-2xl font-bold">A Different Kind of Challenge</h3>
            <p>
              This was our first nighttime race, and it definitely threw us for
              a loop. As the sun went down and the temperature cooled, we
              realized we had to rethink everything—when to eat, when to warm
              up, our whole pre-race routine. It took some figuring out, but we
              adapted and made it work. Sometimes the best growth comes from
              stepping outside your comfort zone.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/blogPhotos/dia_de_lost_muerto_culture.jpg"
              alt="Día de los Muertos Festival Celebration"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* The Glow Run Experience - Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image
              src="/blogPhotos/dia_de_lost_muerto_picking_up_bid.jpg"
              alt="Picking up race bibs"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-gradient-to-bl from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4 order-1 md:order-2">
            <h3 className="text-2xl font-bold">The Glow Run Experience</h3>
            <p>
              When we arrived at the start gate, the energy was electric. Party
              lights illuminated the entire area, and a DJ was pumping out music
              that had everyone hyped up. Runners were decked out in all kinds
              of glowing gear—glow sticks, light-up wands, LED bracelets—you
              name it. It looked like a moving rainbow about to take off through
              the darkness. The atmosphere was unlike anything we&apos;d experienced
              at our morning races.
            </p>
          </div>
        </div>

        {/* Racing Through Familiar Territory - Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4">
            <h3 className="text-2xl font-bold">Racing Through Familiar Territory</h3>
            <p>
              The route took us through <strong>North Central Park</strong>—our
              home turf! It was one big loop through the park where we regularly
              do our practice runs, which gave us a unique advantage. Running
              familiar trails in the dark, though? That was a whole new
              experience. There&apos;s something surreal about racing through a place
              you know so well but seeing it completely transformed at night.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/blogPhotos/dia_de_lost_muerto_runners_group.jpg"
              alt="Grizzly Bear Running Club at the race"
              width={1200}
              height={80}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Strong Performances - Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image
              src="/blogPhotos/dia_del_lost_muerto_all_group.jpg"
              alt="Full Grizzly Bear Running Club team"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-gradient-to-bl from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4 order-1 md:order-2">
            <h3 className="text-2xl font-bold">Strong Performances All Around</h3>
            <p>
              This race was extra special because it marked the first
              competition for <strong>Alejandra</strong>, one of our youngest
              members competing in the 10-15 female age group. Watching her out
              there was such a proud moment for all of us—and she didn&apos;t just
              finish, she posted a solid <strong>37:41</strong>! What an
              incredible first race.
            </p>
            <p>
              <strong>Juan B</strong> led our club once again with a strong{" "}
              <strong>27:44</strong>, showing why he&apos;s consistently at the front
              of our pack. And <strong>Juan M</strong> brought it home at{" "}
              <strong>57:15</strong> with his trademark determination (all love,
              Juan!).
            </p>
            <p>
              The competition at this race was noticeably tougher than what
              we&apos;ve faced before. The top three finishers all came in within 17
              minutes—that&apos;s some serious speed. It pushed us to dig deeper and
              showed us what&apos;s possible when we keep training and improving.
            </p>
          </div>
        </div>

        {/* What We're Taking Away */}
        <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-center">What We&apos;re Taking Away</h3>
          <p className="text-lg">
            Three races down, and while we&apos;re pleased with our results, what
            really stands out is the commitment and heart everyone brings to
            every event. That matters more than any finish time. Of course,
            we&apos;re always working to improve and push ourselves further, but the
            foundation we&apos;re building as a team—that&apos;s what will carry us
            through many more races to come.
          </p>
          <p className="text-lg">
            Racing at night taught us to be adaptable. Running on our practice
            course reminded us how far we&apos;ve come. And watching Alejandra
            complete her first race reminded us why we started this journey in
            the first place.
          </p>
        </div>

        {/* Outro */}
        <div className="text-white text-center max-w-4xl mx-auto">
          <p className="text-lg font-semibold">
            Here&apos;s to the next adventure with this amazing group! 🐻
          </p>
        </div>
      </div>
    </div>
  );
};

export default diaDeMuertosBlog;