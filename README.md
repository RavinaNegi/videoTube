📺 YouTube Clone
A modern and responsive YouTube clone built using React.js, styled with Tailwind CSS, and powered by the YouTube Data API v3. Users can search, browse, and watch videos dynamically—just like on real YouTube!

🔧 Tech Stack
⚛️ React.js – Frontend library for UI components

🎨 Tailwind CSS – Utility-first CSS for styling

🌐 Fetch API + Async/Await – For making YouTube API calls

🧭 React Router DOM – For dynamic routing

🔍 YouTube Data API v3 – Real-time video search & metadata

🚀 Features
✅ Search videos by keyword

✅ Watch video in an embedded player

✅ Browse recommended videos

✅ Responsive layout for mobile and desktop

✅ Clean, reusable components

✅ Dynamic routing (watch pages based on video ID)


Live Demo: https://videotubetype.netlify.app/

🔑 YouTube API Setup
Go to Google Cloud Console

Create a new project and enable YouTube Data API v3

Generate an API key

Add the API key to a .env file:


REACT_APP_YOUTUBE_API_KEY=your_api_key_here

const fetchVideos = async () => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=reactjs&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  setVideos(data.items);
};
🧰 Installation

git clone https://github.com/RavinaNegi/videoTube.git
cd youtube-clone
npm install
npm start
