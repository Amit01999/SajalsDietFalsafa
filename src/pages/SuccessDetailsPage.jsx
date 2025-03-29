import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SuccessData } from '../Data/SuccessData';

export default function storyDetailsPage() {
  const { id } = useParams();
  const [story, setstory] = useState(null);
  const formatBanglaText = text => {
    return text
      .replace(/\^\^\s*/g, '\n\n')
      .replace(/\^\s*/g, '\n')
      .split('\n')
      .map(sentence => sentence.trim())
      .filter(sentence => sentence.length > 0);
  };
  useEffect(() => {
    const foundstory = SuccessData.find(b => b.id === Number(id));
    setstory(foundstory);
  }, [id]);

  if (!story) {
    return (
      <p className="text-center text-xl text-gray-500">story not found!</p>
    );
  }

  return (
    <>
      <div className="bg-[#FAFAFA] w-full py-10 pl-28 text-[#545454] font-bold text-xl relative border-b border-[#E5E5E5] mt-24">
        {story.title}
      </div>

      <section className="p-6 md:p-8  relative overflow-hidden">
        <div className="relative pl-10">
          <div className="flex justify-start">
            <img
              src={story.image}
              alt={story.title}
              className="object-contain h-64 md:h-[90vh] mb-6 ml-10"
            />
          </div>
          {story.video && (
            <div
              className="relative max-w-7xl"
              style={{ paddingTop: '56.25%' }}
            >
              {' '}
              {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={story.video.replace('youtu.be/', 'www.youtube.com/embed/')}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className=" p-4 rounded px-10 mt-4">
            {formatBanglaText(story.content).map((sentence, index) => (
              <p
                key={index}
                className="mb-2 text-[#606060] text-[15px] font-medium"
              >
                {sentence}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
