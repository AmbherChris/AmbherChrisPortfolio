const Projects = [
  {
    project: "Pokemon Search",
    image: "/pokemon.png",
    descriptions:
      "A simple website to search Pokémon by name and view their HP and abilities using the Pokémon API.",
    url: "https://find-pokemon-character.vercel.app/",
  },
  {
    project: "GreenGem",
    image: "/ggcover.png",
    descriptions:
      "A herbal plant guide app offering insights on various herbs.",
    url: "https://apkpure.com/greengem/com.app.greengem_app",
  },
];

export default function ProjectButtons() {
  return (
    <>
     <h2 className="self-center">Projects</h2>
    <div className="flex  items-center justify-center gap-4 p-6">

       
      {Projects.map((proj, index) => (
        <a
          key={index}
          href={proj.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center gap-4 bg-white shadow-md hover:shadow-lg transition rounded-lg p-4 w-full max-w-lg border border-gray-200"
        >
          <img
            src={proj.image}
            alt={proj.project}
            className="w-auto h-30 object-cover rounded"
          />
          <div>
            <h2 className="text-lg font-semibold">{proj.project}</h2>
            <p className="text-sm text-gray-600">{proj.descriptions}</p>
          </div>
        </a>
      ))}
    </div>
    </>
  );
}
