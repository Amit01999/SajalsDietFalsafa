import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BlogData } from '../Data/BlogData';

export default function BlogDetailsPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const formatBanglaText = text => {
    return text
      .replace(/\^\^\s*/g, '\n\n') // Replace '^^' with two new lines
      .replace(/\^\s*/g, '\n') // Replace single '^' with one new line
      .split('\n') // Split by new lines
      .map(sentence => sentence.trim()) // Trim spaces
      .filter(sentence => sentence.length > 0); // Remove empty entries
  };
  useEffect(() => {
    const foundBlog = BlogData.find(b => b.id === Number(id));
    setBlog(foundBlog);
  }, [id]);

  if (!blog) {
    return <p className="text-center text-xl text-gray-500">Blog not found!</p>;
  }

  return (
    <>
      <div className="bg-[#FAFAFA] w-full py-10 pl-32 text-[#545454] font-bold text-xl relative border-b border-[#E5E5E5] mt-24">
        {blog.title}
      </div>

      <section className="p-6 md:p-8  relative overflow-hidden">
        <div className="relative pl-20">
          <div className="flex justify-start">
            <img
              src={blog.image}
              alt={blog.title}
              className="object-contain h-64 md:h-[90vh] mb-6 ml-10"
            />
          </div>
          {blog.video && (
            <div
              className="relative max-w-7xl"
              style={{ paddingTop: '56.25%' }}
            >
              {' '}
              {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={blog.video.replace('youtu.be/', 'www.youtube.com/embed/')}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className=" p-4 rounded px-10 mt-4">
            {formatBanglaText(blog.content).map((sentence, index) => (
              <p key={index} className="mb-2">
                {sentence}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
