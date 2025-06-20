const Projects = [
  {
    project: "Pokemon Search",
    image: "/pokemon.png",
    descriptions:
      "A simple website to search Pokémon by name and view their HP and abilities using the Pokémon API.",
    url: "https://find-pokemon-character.vercel.app/",
    allowEmbed: true,
  },
  {
    project: "GreenGem",
    image: "/ggcover.png",
    descriptions:
      "A herbal plant guide app offering insights on various herbs.",
    url: "https://apkpure.com/greengem/com.app.greengem_app",
    allowEmbed: false, // APKPure likely won't allow embedding
  },
  {
    project: "PCFix",
    image: "/ggcover.png",
    descriptions:
      "A helpful tech tutorial site offering step-by-step guides to fix common desktop and laptop hardware and software issues.",
    url: "https://pc-fix-ac.vercel.app/",
    allowEmbed: true, // APKPure likely won't allow embedding
  },
];

export default function ProjectButtons() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center my-6">Projects</h2>
      <div className="flex flex-wrap items-center justify-center gap-6 p-6">
        {Projects.map((proj, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-md hover:shadow-lg transition rounded-lg p-4 w-full max-w-lg border border-gray-200"
          >
            {proj.allowEmbed ? (
              <div className="relative w-full h-64 mb-4 rounded overflow-hidden border">
                <iframe
                  src={proj.url}
                  title={proj.project}
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            ) : (
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4"
              >
                <img
                  src={proj.image}
                  alt={proj.project}
                  className="w-full h-64 object-cover rounded"
                />
              </a>
            )}
            <div>
              <h2 className="text-lg font-semibold">{proj.project}</h2>
              <p className="text-sm text-gray-600">{proj.descriptions}</p>
              <a
              href={proj.url}
              target="_blank"
              className="flex w-[150px] justify-center items-center py-1 mt-2 bg-[#1D1D1D] text-[#FFFFFF] rounded-md">Veiw Project</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
