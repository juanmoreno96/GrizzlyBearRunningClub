"use client";
import Image from 'next/image';
import Footer from "../../../components/footer";

const mysecond5k = () => {
    return (
        <div className='bg-rose-950 bg-diagonal-stripes mt-24'>
            <h2 id="mysecond5k" className="text-3xl text-center font-bold mb-4">My Second 5K Race: Chasing the Hour (April 26, 2025)</h2>
              <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 p-5 max-w-screen-2xl mx-auto">
                <div className="w-full max-w-screen-2xl mx-auto p-6 flex items-center justify-center bg-transparent">
                  <div className="overflow-hidden rounded-lg shadow-lg w-[500px] h-[400px] flex items-center justify-center bg-transparent">
                    <Image
                      src="/gallery/events/runningBearthreecasa5k.jpg"
                      alt="Contact Image"
                      width={600}
                      height={900}
                      className="object-cover scale-125 w-full h-full"
                    />
                  </div>
                </div>
                <div className="col-span-2 w-full max-w-screen-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
                  <ul className="space-y-1">
                <li className="p-4 bg-gray-100 rounded-lg shadow">
                  <p className="text-gray-600">Hello! I&apos;m Juan M, aka Bear — one of the founders of the Grizzly Bear Running Club — and this April, I completed my second 5K race.
                  </p> 
                  <p className="text-gray-600">Why is this race more important than the first? Because this was the first time I went in with a real goal: I wanted to beat my previous time and finish under an hour.
                  </p>
                </li>
                <li className="p-4 bg-gray-100 rounded-lg shadow">
                  <p className="text-gray-600">Back in January, my coworkers and I set personal goals for the year 2025, and this was mine. Everyone on my team — including the running club — knew my mission, and from that moment on, it was time to train.</p>
                  <p className="text-gray-600">Now, I know what you&apos;re thinking: &quot;Finishing a 5K in under an hour? That should be easy.&quot; But for me — and my friend Juan B — this felt like climbing a mountain. We both started from square one, just walking as far as we could before getting winded. So to commit to a timed goal felt nearly impossible.</p>
                </li>
                <li className="p-4 bg-gray-100 rounded-lg shadow">
                  <p className="text-gray-600">Still, I started training in January, doing 5Ks week after week. But every single practice run? I was always over an hour — usually by 8 to 10 minutes. My confidence started to slip. And when race week came around, I was seriously second-guessing myself.</p>
                  <p className="text-gray-600">I even &quot;accidentally&quot; forgot to register online — a subconscious excuse ready to go. I was prepared to tell my friends I&apos;d just show up to cheer them on. But on race morning, I made a decision: I suited up, headed to the event, and asked if I could register on the day of. And I could.</p>
                </li>
                <li className="p-4 bg-gray-100 rounded-lg shadow">
                  <p className="text-gray-600">So there I was — a nervous wreck. I hadn&apos;t felt like that in a long time. But seeing my running club there helped calm me down.</p>
                  <p className="text-gray-600">Then the race began. Just like the first time, the energy was electric. The crowd cheered, and we were off. Before I knew it, I&apos;d finished mile one and still felt good. I kept checking my watch to stay on pace.</p>
                </li>
                <li className="p-4 bg-gray-100 rounded-lg shadow">
                  <p className="text-gray-600">But mile two hit me like a wall. Maybe I pushed too hard early on. Maybe I wasn’t ready. But I kept moving — mostly power walking — just barely staying on time.</p>
                </li>
                <li className="p-4 bg-gray-100 rounded-lg shadow">
                  <p className="text-gray-600">Then came the final mile.</p>
                  <p className="text-gray-600">I found my rhythm again. I felt strong. And as I turned the last corner, I saw something incredible — my family and friends waiting at the finish line. Even though I was one of the last to cross, I looked down at my watch...</p>
                </li>
                <li className="p-4 bg-gray-100 rounded-lg shadow">
                  <p className="text-gray-600">54 minutes and 57 seconds.</p>
                </li>
                <li className="p-4 bg-gray-100 rounded-lg shadow">
                  <p className="text-gray-600">I did it.</p>
                </li>
                  </ul> 
                </div>
              </div>
              <Footer />
        </div>
    );
};
export default mysecond5k;