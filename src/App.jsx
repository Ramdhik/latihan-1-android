const Button = ({ children, href }) => {
  return (
    <a href={href} className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-full w-full" style={{ textAlign: 'center' }} target="_blank" rel="noopener noreferrer">
      <span className="text-center text-white text-md font-bold mb-2">{children}</span>
    </a>
  );
};
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 items-center justify-center">
      <div className="p-10 max-h-lg max-w-lg bg-gray-800 font-bold text-white rounded-lg flex flex-col items-center">
        <div className="w-24 h-24 flex items-center justify-center bg-red-500 rounded-full">
          <img src="/public/Profile-picture.JPG" alt="Profile Picture" className="w-full h-full object-cover rounded-full" />
        </div>
        <h1 className="mt-5 text-center font-bold text-white text-3xl">Ramadhika Darmaputra</h1>
        <h3 className="mt-1 text-center text-cyan-300 text-sm">Jakarta, Indonesia</h3>
        <p className="mt-5 text-center text-white text-sm">Frontend Developer</p>
        <Button href="https://www.instagram.com/rmadhika?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</Button>
        <Button href="https://github.com/Ramdhik">GitHub</Button>
        <Button href="https://www.linkedin.com/in/ramadhika-darmaputra-2b03ab261/">Linkedin</Button>
      </div>
    </div>
  );
}

export default App;
