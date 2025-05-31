const athleticVideoGallery = () => {
  const videos = [
    { id: 'PBx-9Tr1ybo', title: 'Sam Sulek Back Workout' },
    { id: '4NyJPgBUREw', title: 'How To Deadlift Properly' },
    { id: 'Dem7Hw0fQw4', title: 'How Does Martins Licis Squat So Low' },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-2 text-center">{video.title}</h2>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default athleticVideoGallery;
