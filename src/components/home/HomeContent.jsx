import { useEffect, useState } from "react";
import { getContent } from "./services/getContent";

const HomeContent = () => {
  const [articles, setArticles] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const contentData = await getContent(token);
        console.log("Content data:", contentData);
        setArticles(contentData.resArticles);
        setVideos(contentData.resVideos);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchData();
  }, []);

  // Function to generate thumbnail URL for articles
  const getArticleThumbnailUrl = (url) => {
    const urlObj = new URL(url);
    const host = urlObj.hostname;
    return `https://via.placeholder.com/150?text=${host}`;
  };

  // Function to generate thumbnail URL for YouTube videos
  const getYouTubeThumbnailUrl = (url) => {
    const videoId = getYouTubeIdFromUrl(url); // Function to extract YouTube video ID
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  };

  // Function to get YouTube video ID from URL
  const getYouTubeIdFromUrl = (url) => {
    // eslint-disable-next-line no-useless-escape
    const regex =
      // eslint-disable-next-line no-useless-escape
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match && match[1];
  };

  return (
    <main className="p-20">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {articles.map((article, index) => (
            <article key={index} className="border rounded-lg p-4 shadow-md">
              <img
                src={getArticleThumbnailUrl(article.url)}
                alt={article.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold">{article.title}</h2>
              {/* <p>{article.content}</p> */}
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-orange-500 text-white px-3 py-1 rounded inline-block"
              >
                Read Article
              </a>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {videos.map((video, index) => (
            <article key={index} className="border rounded-lg p-4 shadow-md">
              <img
                src={getYouTubeThumbnailUrl(video.url)}
                alt={video.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{video.title}</h3>
              <p>{video.description}</p>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-orange-500 text-white px-3 py-1 rounded inline-block"
              >
                Watch Video
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomeContent;
