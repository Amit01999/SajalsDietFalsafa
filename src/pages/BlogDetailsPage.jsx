import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BlogData } from '../Data/BlogData';
import CmagBaby from '../Data/CmagBaby';
import BodyReshaping from '../Data/BodyReshaping';
import PregnancyPostpartum from '../Data/PregnancyPostpartum';
import pcos from '../Data/Pcos';

export default function BlogDetailsPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  // const formatBanglaText = text => {
  //   return text
  //     .replace(/\^\^\s*/g, '\n\n') // Replace '^^' with two new lines
  //     .replace(/\^\s*/g, '\n') // Replace single '^' with one new line
  //     .split('\n') // Split by new lines
  //     .map(sentence => sentence.trim()) // Trim spaces
  //     .filter(sentence => sentence.length > 0); // Remove empty entries
  // };
  // const formatBanglaText = text => {
  //   return text
  //     .replace(/\^\^\^\s*/g, '\n__blank__\n') // Special marker for double break
  //     .replace(/\^\^\s*/g, '\n__blank__\n') // Single break
  //     .replace(/\^\s*/g, '\n') // Single break
  //     .split('\n')
  //     .map(line => line.trim())
  //     .filter(line => line || line === '__blank__')
  //     .map(line => {
  //       if (line === '__blank__') return '__blank__';

  //       const segments = [];
  //       const regex = /\*(.*?)\*/g;
  //       let lastIndex = 0;
  //       let match;

  //       while ((match = regex.exec(line))) {
  //         if (match.index > lastIndex) {
  //           segments.push({
  //             text: line.slice(lastIndex, match.index),
  //             italic: false,
  //           });
  //         }
  //         segments.push({ text: match[1], italic: true });
  //         lastIndex = regex.lastIndex;
  //       }

  //       if (lastIndex < line.length) {
  //         segments.push({ text: line.slice(lastIndex), italic: false });
  //       }

  //       return segments;
  //     });
  // };
  // const formatBanglaText = text => {
  //   return text
  //     .replace(/\^\^\^\s*/g, '\n__blank__\n__blank__\n')
  //     .replace(/\^\^\s*/g, '\n__blank__\n')
  //     .replace(/\^\s*/g, '\n')
  //     .split('\n')
  //     .map(line => line.trim())
  //     .reduce((acc, line, index) => {
  //       if (line === '__blank__') {
  //         acc.push({ type: 'br' });
  //         return acc;
  //       }

  //       const regex = /(\*\*(.*?)\*\*|\*(.*?)\*)/g;
  //       let match;
  //       let lastIndex = 0;

  //       while ((match = regex.exec(line))) {
  //         if (match.index > lastIndex) {
  //           acc.push({
  //             text: line.slice(lastIndex, match.index),
  //             italic: false,
  //             bold: false,
  //             type: 'text',
  //           });
  //         }

  //         if (match[2]) {
  //           acc.push({
  //             text: match[2],
  //             italic: false,
  //             bold: true,
  //             type: 'text',
  //           });
  //         } else if (match[3]) {
  //           acc.push({
  //             text: match[3],
  //             italic: true,
  //             bold: false,
  //             type: 'text',
  //           });
  //         }

  //         lastIndex = regex.lastIndex;
  //       }

  //       if (lastIndex < line.length) {
  //         acc.push({
  //           text: line.slice(lastIndex),
  //           italic: false,
  //           bold: false,
  //           type: 'text',
  //         });
  //       }

  //       // Add a soft line break at the end of each line (optional)
  //       if (index < text.length - 1) acc.push({ type: 'br' });

  //       return acc;
  //     }, []);
  // };
  const formatBanglaText = text => {
    return text
      .replace(/\^\^\^\s*/g, '\n__blank__\n__blank__\n__blank__\n')
      .replace(/\^\^\s*/g, '\n__blank__\n__blank__\n')
      .replace(/\^\s*/g, '\n__small_blank__\n')
      .split('\n')
      .map(line => line.trim())
      .reduce((acc, line) => {
        if (line === '__blank__') {
          acc.push({ type: 'br', size: 'large' });
          return acc;
        }
        if (line === '__small_blank__') {
          acc.push({ type: 'br', size: 'small' });
          return acc;
        }

        const regex = /(\*\*(.*?)\*\*|\*(.*?)\*|(https?:\/\/[^\s]+))/g;
        let match;
        let lastIndex = 0;

        while ((match = regex.exec(line))) {
          if (match.index > lastIndex) {
            acc.push({
              text: line.slice(lastIndex, match.index),
              italic: false,
              bold: false,
              type: 'text',
            });
          }

          if (match[2]) {
            acc.push({
              text: match[2],
              italic: false,
              bold: true,
              type: 'text',
            });
          } else if (match[3]) {
            acc.push({
              text: match[3],
              italic: true,
              bold: false,
              type: 'text',
            });
          } else if (match[4]) {
            acc.push({ text: match[4], type: 'link' });
          }

          lastIndex = regex.lastIndex;
        }

        if (lastIndex < line.length) {
          acc.push({
            text: line.slice(lastIndex),
            italic: false,
            bold: false,
            type: 'text',
          });
        }

        return acc;
      }, []);
  };

  useEffect(() => {
    let foundBlog = BlogData.find(b => b.id === Number(id));

    if (!foundBlog) {
      foundBlog = CmagBaby.find(b => b.id === id);
    }
    if (!foundBlog) {
      foundBlog = BodyReshaping.find(b => b.id === id);
    }
    if (!foundBlog) {
      foundBlog = PregnancyPostpartum.find(b => b.id === id);
    }
    if (!foundBlog) {
      foundBlog = pcos.find(b => b.id === id);
    }

    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [id]);

  if (!blog) {
    return <p className="text-center text-xl text-gray-500">Blog not found!</p>;
  }

  return (
    <>
      <div className="bg-[#FAFAFA] w-full py-10 p-7 md:pl-24 text-[#545454] font-bold text-xl relative border-b border-[#E5E5E5] ">
        {blog.title}
      </div>

      <section className="md:p-8 relative overflow-hidden md:ml-7">
        <div className="relative ">
          <div className="flex justify-start">
            <img
              src={blog.image}
              alt={blog.title}
              className="object-contain h-auto p-5  mb-6 md:ml-7"
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

          {/* <div className=" p-5 rounded md:px-10 mt-4">
            {formatBanglaText(blog.content).map((sentence, index) => (
              <p
                key={index}
                className="mb-2 subpixel-antialiased text-[#707070] text-[15px] font-medium leading-loose"
              >
                {sentence}
              </p>
            ))}
          </div> */}
          {/* <div className="p-5 rounded md:px-10 mt-4">
            {formatBanglaText(blog.content).map((sentenceParts, index) => {
              if (sentenceParts === '__blank__') {
                return (
                  <p key={index} className="mb-4">
                    &nbsp;
                  </p>
                ); // renders vertical space
              }

              return (
                <p
                  key={index}
                  className="mb-2 leading-loose text-[#606060] text-[15px] font-medium subpixel-antialiased "
                >
                  {sentenceParts.map((part, idx) => (
                    <span
                      key={idx}
                      className={`inline-block ${
                        part.italic ? 'italic text-[17px] mx-1 mb-2' : ''
                      }`}
                    >
                      {part.text}
                    </span>
                  ))}
                </p>
              );
            })}
          </div> */}
          {/* <div className="p-5 rounded md:px-10 mt-4">
            <p
              className="text-[#707070] text-[15px] font-medium subpixel-antialiased leading-[1.8]"
              style={{
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              {formatBanglaText(blog.content).map((part, idx) => {
                if (part.type === 'br')
                  return (
                    <span
                      key={idx}
                      style={{ display: 'block', marginBottom: '0.8rem' }}
                    ></span>
                  );

                return (
                  <span
                    key={idx}
                    className={`inline ${part.bold ? 'font-bold' : ''} ${
                      part.italic ? 'italic' : ''
                    }`}
                  >
                    {part.text}
                  </span>
                );
              })}
            </p>
          </div> */}
          {/* <div className="p-5 rounded md:px-10 mt-4">
            {(() => {
              const parts = formatBanglaText(blog.content);
              const elements = [];
              let currentLine = [];

              parts.forEach((part, idx) => {
                if (part.type === 'br') {
                  if (currentLine.length > 0) {
                    elements.push(
                      <p
                        key={`line-${elements.length}`}
                        className="text-[#707070] text-[15px] font-medium subpixel-antialiased leading-[1.8]"
                        style={{
                          textRendering: 'optimizeLegibility',
                          WebkitFontSmoothing: 'antialiased',
                          MozOsxFontSmoothing: 'grayscale',
                        }}
                      >
                        {currentLine}
                      </p>
                    );
                    currentLine = [];
                  } else {
                    // Push an empty line
                    elements.push(
                      <p
                        key={`line-${elements.length}`}
                        className="text-[#707070] text-[15px] font-medium subpixel-antialiased leading-[1.8]"
                        style={{
                          textRendering: 'optimizeLegibility',
                          WebkitFontSmoothing: 'antialiased',
                          MozOsxFontSmoothing: 'grayscale',
                          minHeight: '1.5rem', // Optional spacing for empty line
                        }}
                      ></p>
                    );
                  }
                } else {
                  currentLine.push(
                    <span
                      key={idx}
                      className={`inline ${part.bold ? 'font-bold' : ''} ${
                        part.italic ? 'italic' : ''
                      }`}
                    >
                      {part.text}
                    </span>
                  );
                }
              });

              // Push any remaining text
              if (currentLine.length > 0) {
                elements.push(
                  <p
                    key={`line-${elements.length}`}
                    className="text-[#707070] text-[15px] font-medium subpixel-antialiased leading-[1.8]"
                    style={{
                      textRendering: 'optimizeLegibility',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
                  >
                    {currentLine}
                  </p>
                );
              }

              return elements;
            })()}
          </div> */}
          <div className="p-5 rounded md:px-10 mt-4">
            {(() => {
              const parts = formatBanglaText(blog.content);
              const elements = [];
              let currentLine = [];

              parts.forEach((part, idx) => {
                if (part.type === 'br') {
                  if (currentLine.length > 0) {
                    elements.push(
                      <p
                        key={`line-${elements.length}`}
                        className="text-[#707070] text-[15px] font-medium subpixel-antialiased leading-[1.8]"
                        style={{
                          textRendering: 'optimizeLegibility',
                          WebkitFontSmoothing: 'antialiased',
                          MozOsxFontSmoothing: 'grayscale',
                        }}
                      >
                        {currentLine}
                      </p>
                    );
                    currentLine = [];
                  }

                  elements.push(
                    <div
                      key={`spacer-${elements.length}`}
                      style={{
                        height: part.size === 'small' ? '0.5rem' : '1.5rem',
                      }}
                    ></div>
                  );
                } else if (part.type === 'link') {
                  currentLine.push(
                    <a
                      key={idx}
                      href={part.text}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline break-all"
                    >
                      {part.text}
                    </a>
                  );
                } else {
                  currentLine.push(
                    <span
                      key={idx}
                      className={`inline ${part.bold ? 'font-bold' : ''} ${
                        part.italic ? 'italic' : ''
                      }`}
                    >
                      {part.text}
                    </span>
                  );
                }
              });

              if (currentLine.length > 0) {
                elements.push(
                  <p
                    key={`line-${elements.length}`}
                    className="text-[#707070] text-[15px] font-medium subpixel-antialiased leading-[1.8]"
                    style={{
                      textRendering: 'optimizeLegibility',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
                  >
                    {currentLine}
                  </p>
                );
              }

              return elements;
            })()}
          </div>
        </div>
      </section>
    </>
  );
}
