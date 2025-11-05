"use client";

const runningTour2025 = () => {
  return (
    <div className="bg-rose-950 min-h-screen py-24 px-4">
      <h2
        id="runningTour2025"
        className="text-3xl text-center font-bold mb-12 text-white px-4 max-w-6xl mx-auto"
      >
        Grizzly Bear Running Club Kicks Off Its First Running Tour! (Fall 2025)
      </h2>

      <div className="max-w-6xl mx-auto pb-12 space-y-16">
        {/* Intro Section */}
        <div className="bg-gradient-to-br text-white text-center max-w-4xl mx-auto space-y-4">
          <p className="text-lg">
            As the temps start to drop and the leaves finally begin to
            change, it can only mean one thing — it&apos;s running season for the{" "}
            <strong>Grizzly Bear Running Club</strong>!
          </p>
          <p className="text-lg">
            This fall marks the start of our{" "}
            <strong>first-ever Running Tour</strong>, and we couldn&apos;t be more
            excited to get things rolling.
          </p>
        </div>

        {/* Zombie Run - Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4">
            <p>
              We kicked off the season at the start of October with the{" "}
              <strong>TAMIU Zombie Run</strong>, where our members got to put
              all their training to the test. This race was a little different
              from the usual — it had two parts: a traditional 5K and a fun{" "}
              <strong>&quot;Zombie Run&quot;</strong>, where runners had to make it
              through a one-mile course while avoiding zombies trying to grab
              their flags. It was the perfect mix of fun, chaos, and cardio.
            </p>
            <p>
              Everyone gave it their all, and while we had some great
              performances (and a few learning moments), the main goal was
              simple — <strong>have fun and just go for it!</strong>
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/blogPhotos/poster25.png"
              alt="Grizzly Bear Running Tour Poster"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Steps Forward 5K - Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
            <img
              src="/blogPhotos/johnyBResults.jpg"
              alt="Juan B Top Ten Finish"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-gradient-to-bl from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4 order-1 md:order-2">
            <p>
              A couple of weeks later, we hit our{" "}
              <strong>second race of the season</strong>, the{" "}
              <strong>Steps Forward 5K</strong>. This one took place at the
              beautiful <strong>Laredo Golf Course</strong>, with green rolling
              hills and a course that was new to all of us. It turned out to be
              a great challenge and an even better confidence boost.
            </p>
            <p>
              A big shoutout to our co-founder <strong>Juan B</strong>, who
              finished <strong>top ten in his age group</strong> — a huge
              achievement that shows what consistent training and determination
              can do (even on the days you&apos;d rather stay in bed).
            </p>
          </div>
        </div>

        {/* Future Goals - Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-8 text-white space-y-4">
            <p>
              These two races are just the beginning of what&apos;s to come. We&apos;re
              getting ready for the big ones — the{" "}
              <strong>Laredo Marathon</strong> and the{" "}
              <strong>Austin Marathon</strong> — our biggest goals of the
              season.
            </p>
            <p>
              None of us have ever run a half or full marathon before, so this
              is going to be a whole new adventure for the team. We&apos;re beyond
              excited for what&apos;s ahead and can&apos;t wait to share the journey with
              all of you.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/blogPhotos/zombieRunGroupRun.jpeg"
              alt="Grizzly Bear Running Club Group Run"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Outro */}
        <div className="text-white text-center max-w-4xl mx-auto">
          <p className="text-lg font-semibold">
            Stay tuned, keep running, and remember — we run for the
            challenge, the fun, and the bear in all of us.
          </p>
        </div>
      </div>

      {/* Footer placeholder */}
      <div className="mt-12 text-center text-white text-sm">
        <p>© 2025 Grizzly Bear Running Club</p>
      </div>
    </div>
  );
};

export default runningTour2025;
