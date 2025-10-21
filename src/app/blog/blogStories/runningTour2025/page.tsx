"use client";
import Image from "next/image";
import Footer from "../../../components/footer";

const runningTour2025 = () => {
  return (
    <div className="bg-rose-950 bg-diagonal-stripes mt-24">
      <h2
        id="runningTour2025"
        className="text-3xl text-center font-bold mb-4 text-white"
      >
        Grizzly Bear Running Club Kicks Off Its First Running Tour! (Fall 2025)
      </h2>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 p-5 max-w-screen-2xl mx-auto">
        <div className="col-span-3 w-full max-w-screen-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
          <ul className="space-y-6">
            {/* --- Intro --- */}
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">
                As the temps start to drop and the leaves finally begin to
                change, it can only mean one thing — it’s running season for the{" "}
                <strong>Grizzly Bear Running Club</strong>!
              </p>
              <p className="text-gray-600">
                This fall marks the start of our{" "}
                <strong>first-ever Running Tour</strong>, and we couldn’t be more
                excited to get things rolling.
              </p>
            </li>

            

            {/* --- Zombie Run --- */}
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">
                We kicked off the season at the start of October with the{" "}
                <strong>TAMIU Zombie Run</strong>, where our members got to put
                all their training to the test. This race was a little different
                from the usual — it had two parts: a traditional 5K and a fun{" "}
                <strong>“Zombie Run”</strong>, where runners had to make it
                through a one-mile course while avoiding zombies trying to grab
                their flags. It was the perfect mix of fun, chaos, and cardio.
              </p>
              <p className="text-gray-600">
                Everyone gave it their all, and while we had some great
                performances (and a few learning moments), the main goal was
                simple — <strong>have fun and just go for it!</strong>
              </p>
            </li>

            {/* --- Image 1: Poster --- */}
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg shadow-lg ">
                <Image
                  src="/blogPhotos/poster25.png"
                  alt="Grizzly Bear Running Tour Poster"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* --- Steps Forward 5K --- */}
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">
                A couple of weeks later, we hit our{" "}
                <strong>second race of the season</strong>, the{" "}
                <strong>Steps Forward 5K</strong>. This one took place at the
                beautiful <strong>Laredo Golf Course</strong>, with green rolling
                hills and a course that was new to all of us. It turned out to be
                a great challenge and an even better confidence boost.
              </p>
              <p className="text-gray-600">
                A big shoutout to our co-founder <strong>Juan B</strong>, who
                finished <strong>top ten in his age group</strong> — a huge
                achievement that shows what consistent training and determination
                can do (even on the days you’d rather stay in bed).
              </p>
            </li>

            {/* --- Image 2: Johny B Results --- */}
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg shadow-lg w-[500px] h-[350px]">
                <Image
                  src="/blogPhotos/johnyBResults.jpg"
                  alt="Juan B Top Ten Finish"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* --- Future Goals --- */}
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">
                These two races are just the beginning of what’s to come. We’re
                getting ready for the big ones — the{" "}
                <strong>Laredo Marathon</strong> and the{" "}
                <strong>Austin Marathon</strong> — our biggest goals of the
                season.
              </p>
              <p className="text-gray-600">
                None of us have ever run a half or full marathon before, so this
                is going to be a whole new adventure for the team. We’re beyond
                excited for what’s ahead and can’t wait to share the journey with
                all of you.
              </p>
            </li>
            {/* --- Outro --- */}
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600 font-semibold text-center">
                Stay tuned, keep running, and remember — we run for the
                challenge, the fun, and the bear in all of us.
              </p>
            </li>
            {/* --- Image 3: Group Run --- */}
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg shadow-lg w-[500px] h-[350px]">
                <Image
                  src="/blogPhotos/zombieRunGroupRun.jpeg"
                  alt="Grizzly Bear Running Club Group Run"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default runningTour2025;
